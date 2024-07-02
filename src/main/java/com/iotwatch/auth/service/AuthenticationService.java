package com.iotwatch.auth.service;

import com.iotwatch.auth.dto.SignInRequestDto;
import com.iotwatch.auth.dto.SignOutRequestDto;
import com.iotwatch.auth.dto.SignUpRequestDto;
import com.iotwatch.auth.dto.TokenRefreshDto;
import org.springframework.http.ResponseEntity;

public interface AuthenticationService {
    ResponseEntity<?> signUp(SignUpRequestDto request);

    ResponseEntity<?> signIn(SignInRequestDto request);

    ResponseEntity<?> refreshToken(TokenRefreshDto tokenRefreshDto);

    ResponseEntity<?> signOut(SignOutRequestDto signOutRequestDto);
}
