package com.iotwatch.auth.service.impl;

import com.iotwatch.auth.model.RefreshToken;
import com.iotwatch.auth.repository.RefreshTokenRepository;
import com.iotwatch.auth.repository.UserRepository;
import com.iotwatch.auth.service.RefreshTokenService;
import com.iotwatch.exceptions.RefreshTokenException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Optional;
import java.util.UUID;

@Service
@AllArgsConstructor
public class RefreshTokenServiceImpl implements RefreshTokenService {

    @Value("${iotwatch.jwtExpirationRefreshToken}")
    private final Long refreshTokenDurationMs;

    private UserRepository userRepository;
    private RefreshTokenRepository refreshTokenRepository;

    @Override
    public RefreshToken createNewToken(String userId) {
        return refreshTokenRepository.save(RefreshToken.builder()
                .user(userRepository.findById(userId).get())
                .token(UUID.randomUUID().toString())
                .expirationDate(Instant.now().plusMillis(refreshTokenDurationMs))
                .build());
    }

    @Override
    public RefreshToken verifyExpiration(RefreshToken token) {
        if (token.getExpirationDate().compareTo(Instant.now()) < 0) {
            refreshTokenRepository.delete(token);
            throw new RefreshTokenException(token.getToken(), "Refresh token was expired. Please make a new signin request");
        }

        return token;
    }

    @Override
    public Optional<RefreshToken> findByToken(String token) {
        return refreshTokenRepository.findByToken(token);
    }

    @Override
    public int deleteByUserId(String userId) {
        return refreshTokenRepository.deleteByUser(userRepository.findById(userId).get());
    }

}
