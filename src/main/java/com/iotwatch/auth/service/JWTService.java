package com.iotwatch.auth.service;

import com.iotwatch.auth.details.UserDetailsImpl;
import org.springframework.security.core.userdetails.UserDetails;

public interface JWTService {
    String extractUserName(String token);

    String generateToken(UserDetailsImpl user);

    boolean isTokenValid(String token, UserDetails userDetails);
}