package com.iotwatch.auth.service.impl;

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
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Service
public class AuthenticationServiceImpl implements AuthenticationService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private JWTService jwtService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    public JWTAuthResponse signup(SignUpRequestDto signUpRequestDto) {
//        if (userRepository.existsByUsername(signUpRequestDto.getUsername())) {
//            return ResponseEntity.badRequest().body(new MessageResponse("User already exists"));
//        }
//
//        if (userRepository.existsByEmail(signUpRequestDto.getEmail())) {
//            return ResponseEntity.badRequest().body(new MessageResponse("Email already in use"));
//        }

        Set<EnumRole> enumRoleSet = signUpRequestDto.getEnumRoles();
        Set<Role> roleSet = new HashSet<>();

        if (Objects.isNull(enumRoleSet)) {
            Role userRole = roleRepository.findById(EnumRole.USER.toString()).orElseThrow(() -> new RuntimeException("Role not found"));
            roleSet.add(userRole);
        } else {
            enumRoleSet.forEach(role -> {
                Role resultRole = roleRepository.findById(EnumRole.USER.toString()).orElseThrow(() -> new RuntimeException("Role not found"));
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
        var jwt = jwtService.generateToken(user);
        return JWTAuthResponse.builder().token(jwt).build();
    }

    @Override
    public JWTAuthResponse signin(SignInRequestDto signInRequestDto) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(signInRequestDto.getUsername(), signInRequestDto.getPassword()));
        var user = userRepository.findByName(signInRequestDto.getUsername())
                .orElseThrow(() -> new IllegalArgumentException("Invalid username or password"));
        var jwt = jwtService.generateToken(user);
        return JWTAuthResponse.builder().token(jwt).build();
    }
}
