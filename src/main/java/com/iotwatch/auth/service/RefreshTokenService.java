package com.iotwatch.auth.service;

import com.iotwatch.auth.model.RefreshToken;

import java.util.Optional;

public interface RefreshTokenService {
    RefreshToken createNewToken(String userId);
    RefreshToken verifyExpiration(RefreshToken token);
    Optional<RefreshToken> findByToken(String token);
    void deleteByUserId(String userId);
}
