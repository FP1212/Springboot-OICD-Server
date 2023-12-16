package com.iotwatch.auth.service;

import com.iotwatch.auth.model.RefreshToken;

import java.util.Optional;

public interface RefreshTokenService {
    RefreshToken createNewToken(Long userId);
    RefreshToken verifyExpiration(RefreshToken token);
    Optional<RefreshToken> findByToken(String token);
    int deleteById(Long userId);
}
