package com.iotwatch.auth.controller;

import com.iotwatch.auth.dto.SignInRequestDto;
import com.iotwatch.auth.dto.SignUpRequestDto;
import com.iotwatch.auth.model.User;
import com.iotwatch.auth.service.AuthenticationService;
import com.iotwatch.auth.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(value = "/api/v1/auth")
public class AuthController {

    @Autowired
    UserService userService;

    @Autowired
    AuthenticationService authenticationService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignUpRequestDto signUpRequestDto) {
        return ResponseEntity.ok(authenticationService.signup(signUpRequestDto));
    }

    @PostMapping("/signin")
    public ResponseEntity<?> signin(@RequestBody SignInRequestDto signInRequestDto) {
        return ResponseEntity.ok(authenticationService.signin(signInRequestDto));
    }

    @GetMapping("/get/{id}")
    public ResponseEntity getUser(@PathVariable String id) {
        return ResponseEntity.ok(userService.get(id));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteUser (@PathVariable String id) {
        userService.delete(id);
        return ResponseEntity.ok("");
    }
}
