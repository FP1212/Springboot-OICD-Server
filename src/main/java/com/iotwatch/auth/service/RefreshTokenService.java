package com.iotwatch.auth.service;

import com.iotwatch.auth.model.RefreshToken;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface RefreshTokenService {
    RefreshToken createNewToken(String userId);
    RefreshToken verifyExpiration(RefreshToken token);
    Optional<RefreshToken> findByToken(String token);
    int deleteByUserId(String userId);
}
