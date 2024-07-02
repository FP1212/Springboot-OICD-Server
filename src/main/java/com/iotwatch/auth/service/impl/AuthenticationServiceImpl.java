package com.iotwatch.auth.service.impl;

import com.iotwatch.auth.details.UserDetailsImpl;
import com.iotwatch.auth.dto.SignOutRequestDto;
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
import com.iotwatch.enums.EnumStatusResponse;
import com.iotwatch.exceptions.RefreshTokenException;
import com.iotwatch.response.MessageResponse;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService {

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationServiceImpl.class);
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final JWTService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final RefreshTokenService refreshTokenService;
    private final AuthenticationManager authenticationManager;
    private final MessageSource messageSource;

    @Override
    public ResponseEntity<?> signUp(SignUpRequestDto signUpRequestDto) {
        try {
            if (userRepository.existsByUsername(signUpRequestDto.getUserName())) {
                return ResponseEntity.badRequest().body(
                        new MessageResponse(messageSource.getMessage("user.name.in.use", null, LocaleContextHolder.getLocale()),
                                EnumStatusResponse.ERROR.getStatus()));
            }

            if (userRepository.existsByEmail(signUpRequestDto.getEmail())) {
                return ResponseEntity.badRequest().body(new MessageResponse(messageSource.getMessage("user.email.in.use", null, LocaleContextHolder.getLocale()), EnumStatusResponse.ERROR.getStatus()));
            }

            Set<EnumRole> enumRoleSet = signUpRequestDto.getRoles();
            Set<Role> roleSet = new HashSet<>();

            if (false) { //Agregar una consulta para saber si el usuario es el que paga la suscripcion y este sera OWNER

            }
            else if (Objects.isNull(enumRoleSet)) {
                Role userRole = roleRepository.findByRole(EnumRole.USER.name()).orElseThrow(() -> new RuntimeException(messageSource.getMessage("user.role.not.found", null, LocaleContextHolder.getLocale())));
                roleSet.add(userRole);
            } else {
                enumRoleSet.forEach(role -> {
                    Role resultRole = roleRepository.findByRole(role.name()).orElseThrow(() -> new RuntimeException(messageSource.getMessage("user.role.not.found", null, LocaleContextHolder.getLocale())));
                    roleSet.add(resultRole);
                });
            }

            User user = User.builder()
                    .username(signUpRequestDto.getUserName())
                    .firstName(signUpRequestDto.getFirstName())
                    .lastName(signUpRequestDto.getLastName())
                    .email(signUpRequestDto.getEmail())
                    .password(passwordEncoder.encode(signUpRequestDto.getPassword()))
                    .roles(roleSet)
                    .build();

            userRepository.save(user);
            return new ResponseEntity<>(messageSource.getMessage("user.save.success", null, LocaleContextHolder.getLocale()), HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage(), EnumStatusResponse.ERROR.getStatus()));
        }
    }

    @Override
    public ResponseEntity<?> signIn(SignInRequestDto signInRequestDto) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(signInRequestDto.getUsername(), signInRequestDto.getPassword()));

            SecurityContextHolder.getContext().setAuthentication(authentication);
            UserDetailsImpl userPrincipal = (UserDetailsImpl) authentication.getPrincipal();

            String jwt = jwtService.generateToken(userPrincipal.getEmail());

            List<String> roles = userPrincipal.getAuthorities().stream()
                    .map(GrantedAuthority::getAuthority)
                    .toList();

            RefreshToken refreshToken = refreshTokenService.createNewToken(userPrincipal.getId());

            return ResponseEntity.ok(JWTAuthResponse.builder()
                    .id(userPrincipal.getId())
                    .email(userPrincipal.getEmail())
                    .refreshToken(refreshToken.getToken())
                    .roles(roles)
                    .token(jwt)
                    .status(EnumStatusResponse.SUCCESS.getStatus())
                    .build());
        } catch (Exception e){
            logger.error("SignIn Exception: {}", e.getMessage());
            return ResponseEntity.ok().body(new MessageResponse(messageSource.getMessage("user.bad.credentials", null, LocaleContextHolder.getLocale()), EnumStatusResponse.BAD_CREDENTIALS.getStatus()));
        }
    }

    @Override
    @Transactional
    public ResponseEntity<?> signOut(SignOutRequestDto signOutRequestDto) {
        refreshTokenService.deleteByUserId(signOutRequestDto.getUserId());
        return ResponseEntity.ok(new MessageResponse(messageSource.getMessage("user.log.out", null, LocaleContextHolder.getLocale()), EnumStatusResponse.SUCCESS.getStatus()));
    }

    @Override
    public ResponseEntity<?> refreshToken (TokenRefreshDto tokenRefreshDto) {
        String requestRefreshToken = tokenRefreshDto.getRefreshToken();

        try {
            return refreshTokenService.findByToken(requestRefreshToken)
                    .map(refreshTokenService::verifyExpiration)
                    .map(RefreshToken::getUser)
                    .map(user -> {
                        String token = jwtService.generateToken(user.getEmail());
                        return ResponseEntity.ok(new RefreshTokenResponse(token, requestRefreshToken));
                    })
                    .orElseThrow(() -> new RefreshTokenException(requestRefreshToken,
                            messageSource.getMessage("user.refresh.token.not.found", null, LocaleContextHolder.getLocale()))
                    );
        } catch (Exception e){
            logger.error("Refresh Token Exception: {}", e.getMessage());
            return ResponseEntity.badRequest().body(MessageResponse.builder().message(e.getMessage()).build());
        }
    }

}
