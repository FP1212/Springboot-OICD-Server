package com.iotwatch.auth.service.impl;

import com.iotwatch.auth.details.UserDetailsImpl;
import com.iotwatch.auth.model.Role;
import com.iotwatch.auth.repository.RoleRepository;
import com.iotwatch.enums.EnumRole;
import com.iotwatch.response.JWTAuthResponse;
import com.iotwatch.auth.dto.SignInRequestDto;
import com.iotwatch.auth.dto.SignUpRequestDto;
import com.iotwatch.auth.model.User;
import com.iotwatch.auth.repository.UserRepository;
import com.iotwatch.auth.service.AuthenticationService;
import com.iotwatch.auth.service.JWTService;
import com.iotwatch.response.MessageResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private JWTService jwtService;
    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;

    @Override
    public ResponseEntity<?> signup(SignUpRequestDto signUpRequestDto) {
        try {
            if (userRepository.existsByUsername(signUpRequestDto.getUserName())) {
                return ResponseEntity.badRequest().body(new MessageResponse("Username already in use"));
            }

            if (userRepository.existsByEmail(signUpRequestDto.getEmail())) {
                return ResponseEntity.badRequest().body(new MessageResponse("Email already in use"));
            }

            Set<EnumRole> enumRoleSet = signUpRequestDto.getRoles();
            Set<Role> roleSet = new HashSet<>();

            if (Objects.isNull(enumRoleSet)) {
                Role userRole = roleRepository.findByRole(EnumRole.USER.name()).orElseThrow(() -> new RuntimeException("Role not found"));
                roleSet.add(userRole);
            } else {
                enumRoleSet.forEach(role -> {
                    Role resultRole = roleRepository.findByRole(role.name()).orElseThrow(() -> new RuntimeException("Role not found"));
                    roleSet.add(resultRole);
                });
            }

            User user = User.builder()
                    .username(signUpRequestDto.getUserName())
                    .firstName(signUpRequestDto.getFirstName())
                    .lastName(signUpRequestDto.getLastName())
                    .email(signUpRequestDto.getEmail())
                    .password(passwordEncoder.encode(signUpRequestDto.getPassword()))
                    .enumRoles(roleSet)
                    .build();

            userRepository.save(user);
            return ResponseEntity.ok("User successfully saved");
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        }
    }

    @Override
    public ResponseEntity<?> signin(SignInRequestDto signInRequestDto) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(signInRequestDto.getUsername(), signInRequestDto.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();

        String jwt = jwtService.generateToken(userPrincipal);

        List<String> roles = userPrincipal.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .toList();

        return ResponseEntity.ok(JWTAuthResponse.builder()
                .username(userPrincipal.getUsername())
                .email(userPrincipal.getEmail())
                .roles(roles)
                .token(jwt)
                .build());
    }

}
