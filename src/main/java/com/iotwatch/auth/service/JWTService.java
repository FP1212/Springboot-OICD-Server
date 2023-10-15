package com.iotwatch.auth.service;

import org.springframework.security.core.userdetails.UserDetails;

public interface JWTService {
    String extractUserName(String token);

    String generateToken(String username);

    boolean isTokenValid(String token, UserDetails userDetails);
}