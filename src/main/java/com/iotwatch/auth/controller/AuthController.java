package com.iotwatch.auth.controller;

import com.iotwatch.auth.dto.SignInRequestDto;
import com.iotwatch.auth.dto.SignOutRequestDto;
import com.iotwatch.auth.dto.SignUpRequestDto;
import com.iotwatch.auth.dto.TokenRefreshDto;
import com.iotwatch.auth.service.AuthenticationService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins = "*", maxAge = 3600)
@Controller
@AllArgsConstructor
@RequestMapping(value = "/api/v1/auth")
public class AuthController {

    private AuthenticationService authenticationService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody SignUpRequestDto signUpRequestDto) {
        return authenticationService.signUp(signUpRequestDto);
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody SignInRequestDto signInRequestDto) {
        return authenticationService.signIn(signInRequestDto);
    }

    @PostMapping("/signout")
    public ResponseEntity<?> signout(@RequestBody SignOutRequestDto signOutRequestDto) {
        return authenticationService.signOut(signOutRequestDto);
    }

    @PostMapping("/refresh-token")
    public ResponseEntity<?> refreshToken(@Valid @RequestBody TokenRefreshDto tokenRefreshDto) {
        return authenticationService.refreshToken(tokenRefreshDto);
    }
}
