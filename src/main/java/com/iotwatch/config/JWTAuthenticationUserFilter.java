package com.iotwatch.config;

import com.iotwatch.auth.service.JWTService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.RememberMeServices;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Component;

import java.io.IOException;

public class JWTAuthenticationUserFilter extends UsernamePasswordAuthenticationFilter {

    private JWTService jwtService;
    private RememberMeServices rememberMeServices;
    private static final String TOKEN_PREFIX = "Bearer ";
    private static final String HEADER_STRING = "Authorization";

    public JWTAuthenticationUserFilter(AuthenticationManager authenticationManager, JWTService jwtServices, RememberMeServices rememberMeServices) {
        super(authenticationManager);
        this.jwtService = jwtServices;
        this.rememberMeServices = rememberMeServices;
    }

    @Override
    protected void successfulAuthentication(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain chain,
            Authentication authResult
    ) throws IOException, ServletException {
        String token = jwtService.generateToken(((User) authResult.getPrincipal()));
        response.setContentType("application/json");
        response.getWriter().write("{\"token\": \"" + token + "\"}");
        rememberMeServices.loginSuccess(request, response, authResult);
    }
}
