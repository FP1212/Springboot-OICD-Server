package com.iotwatch.auth.service.impl;

import com.iotwatch.auth.model.RefreshToken;
import com.iotwatch.auth.model.User;
import com.iotwatch.auth.repository.RefreshTokenRepository;
import com.iotwatch.auth.repository.UserRepository;
import com.iotwatch.auth.service.RefreshTokenService;
import com.iotwatch.exceptions.RefreshTokenException;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RefreshTokenServiceImpl implements RefreshTokenService {

    @Value("${iotwatch.jwtExpirationRefreshToken}")
    private Long refreshTokenDuration;

    private final UserRepository userRepository;
    private final RefreshTokenRepository refreshTokenRepository;
    private final MessageSource messageSource;

    @Override
    public RefreshToken createNewToken(String userId) {
        return refreshTokenRepository.save(RefreshToken.builder()
                .user(userRepository.findById(userId).orElseThrow(() -> new RuntimeException(messageSource.getMessage("user.not.found", null, LocaleContextHolder.getLocale()))))
                .token(UUID.randomUUID().toString())
                .expirationDate(Instant.now().plus(refreshTokenDuration, ChronoUnit.DAYS))
                .build());
    }

    @Override
    public RefreshToken verifyExpiration(RefreshToken token) {
        if (token.getExpirationDate().compareTo(Instant.now()) < 0) {
            refreshTokenRepository.delete(token);
            throw new RefreshTokenException(token.getToken(), messageSource.getMessage("user.refresh.token.expired", null, LocaleContextHolder.getLocale()));
        }

        return token;
    }

    @Override
    public Optional<RefreshToken> findByToken(String token) {
        return refreshTokenRepository.findByToken(token);
    }

    @Override
    public void deleteByUserId(String userId) {
        userRepository.findById(userId).ifPresent(user -> refreshTokenRepository.deleteByUser(user));
    }
}
