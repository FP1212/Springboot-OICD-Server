package com.iotwatch.auth.controller;

import com.iotwatch.auth.dto.SignInRequestDto;
import com.iotwatch.auth.dto.SignUpRequestDto;
import com.iotwatch.auth.service.AuthenticationService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@Controller
@RequestMapping(value = "/api/v1/auth")
public class AuthController {

    @Autowired
    AuthenticationService authenticationService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@Valid @RequestBody SignUpRequestDto signUpRequestDto) {
        return authenticationService.signup(signUpRequestDto);
    }

    @PostMapping("/signing")
    public ResponseEntity<?> signing(@RequestBody SignInRequestDto signInRequestDto) {
        return ResponseEntity.ok(authenticationService.signin(signInRequestDto));
    }

    @GetMapping("/authenticate")
    public ResponseEntity<Map<String, Boolean>> isAuthenticated(HttpServletRequest request) {
        Map<String, Boolean> response = new HashMap<>();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        boolean isUser = false;

        if (authentication != null && authentication.isAuthenticated()) {
            isUser = authentication.getAuthorities().stream()
                    .noneMatch(authoritiy -> authoritiy.getAuthority().equals("ROLE_ANONYMOUS"));
        }
        response.put("authenticate", authentication.isAuthenticated() && isUser);
        return ResponseEntity.ok(response);
    }
}
