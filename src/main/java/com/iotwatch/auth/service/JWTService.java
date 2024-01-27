package com.iotwatch.auth.service;

import com.iotwatch.user.service.CustomUserDetails;

public interface JWTService {
    String extractLogin(String token);

    String generateToken(String email);

    boolean isTokenValid(String token, CustomUserDetails userDetails);
}