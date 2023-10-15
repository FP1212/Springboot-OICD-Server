package com.iotwatch.auth.service.impl;

import com.iotwatch.auth.details.UserDetailsImpl;
import com.iotwatch.auth.dto.TokenRefreshDto;
import com.iotwatch.auth.model.RefreshToken;
import com.iotwatch.auth.model.Role;
import com.iotwatch.auth.repository.RoleRepository;
import com.iotwatch.auth.response.RefreshTokenResponse;
import com.iotwatch.auth.service.RefreshTokenService;
import com.iotwatch.enums.EnumRole;
import com.iotwatch.auth.response.JWTAuthResponse;
import com.iotwatch.auth.dto.SignInRequestDto;
import com.iotwatch.auth.dto.SignUpRequestDto;
import com.iotwatch.auth.model.User;
import com.iotwatch.auth.repository.UserRepository;
import com.iotwatch.auth.service.AuthenticationService;
import com.iotwatch.auth.service.JWTService;
import com.iotwatch.exceptions.RefreshTokenException;
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

@Service
@AllArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private JWTService jwtService;
    private PasswordEncoder passwordEncoder;
    private AuthenticationManager authenticationManager;
    private RefreshTokenService refreshTokenService;

    @Override
    public ResponseEntity<?> signUp(SignUpRequestDto signUpRequestDto) {
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
    public ResponseEntity<?> signIn(SignInRequestDto signInRequestDto) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(signInRequestDto.getUsername(), signInRequestDto.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();

        String jwt = jwtService.generateToken(userPrincipal.getUsername());

        List<String> roles = userPrincipal.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .toList();

        RefreshToken refreshToken = refreshTokenService.createNewToken(userPrincipal.getId());

        return ResponseEntity.ok(JWTAuthResponse.builder()
                .username(userPrincipal.getUsername())
                .email(userPrincipal.getEmail())
                .refreshToken(refreshToken.getToken())
                .roles(roles)
                .token(jwt)
                .build());
    }

    @Override
    public ResponseEntity<?> signOut() {
        UserDetailsImpl userPrincipal = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        refreshTokenService.deleteByUserId(userPrincipal.getId());
        return ResponseEntity.ok(new MessageResponse("Log out successful!"));
    }

    @Override
    public ResponseEntity<?> refreshToken (TokenRefreshDto tokenRefreshDto) {
        String requestRefreshToken = tokenRefreshDto.getRefreshToken();

        return refreshTokenService.findByToken(requestRefreshToken)
                .map(refreshTokenService::verifyExpiration)
                .map(RefreshToken::getUser)
                .map(user -> {
                    String token = jwtService.generateToken(user.getUsername());
                    return ResponseEntity.ok(new RefreshTokenResponse(token, requestRefreshToken));
                })
                .orElseThrow(() -> new RefreshTokenException(requestRefreshToken,
                        "Refresh token is not in database!")
                );
    }

}
