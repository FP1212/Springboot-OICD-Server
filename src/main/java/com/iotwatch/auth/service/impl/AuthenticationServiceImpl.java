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
import com.iotwatch.response.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private JWTService jwtService;

    private PasswordEncoder passwordEncoder;
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
            Role userRole = roleRepository.findByName(EnumRole.USER).orElseThrow(() -> new RuntimeException("Role not found"));
            roleSet.add(userRole);
        } else {
            enumRoleSet.forEach(role -> {
                Role resultRole = roleRepository.findByName(role).orElseThrow(() -> new RuntimeException("Role not found"));
                roleSet.add(resultRole);
            });
        }

        User user = User.builder()
                .username(signUpRequestDto.getUsername())
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
                new UsernamePasswordAuthenticationToken(signInRequestDto.getEmail(), signInRequestDto.getPassword()));
        var user = userRepository.findByEmail(signInRequestDto.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));
        var jwt = jwtService.generateToken(user);
        return JWTAuthResponse.builder().token(jwt).build();
    }
}
