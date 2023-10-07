package com.iotwatch.auth.service;

import com.iotwatch.response.JWTAuthResponse;
import com.iotwatch.auth.dto.SignInRequestDto;
import com.iotwatch.auth.dto.SignUpRequestDto;
import org.springframework.http.ResponseEntity;

public interface AuthenticationService {
    ResponseEntity signup(SignUpRequestDto request);

    JWTAuthResponse signin(SignInRequestDto request);
}
