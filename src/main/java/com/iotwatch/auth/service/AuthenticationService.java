package com.iotwatch.auth.service;

import com.iotwatch.response.JWTAuthResponse;
import com.iotwatch.auth.dto.SignInRequestDto;
import com.iotwatch.auth.dto.SignUpRequestDto;

public interface AuthenticationService {
    JWTAuthResponse signup(SignUpRequestDto request);

    JWTAuthResponse signin(SignInRequestDto request);
}
