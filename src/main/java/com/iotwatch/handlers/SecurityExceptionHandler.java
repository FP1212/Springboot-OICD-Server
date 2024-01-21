package com.iotwatch.handlers;

import com.iotwatch.response.MessageResponse;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.NoHandlerFoundException;

import java.security.SignatureException;

@RestControllerAdvice
public class SecurityExceptionHandler {

    @ExceptionHandler(AuthenticationException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public MessageResponse handleAuthenticationException(AuthenticationException ex) {
        return MessageResponse.builder().message("Unauthorized: " + ex.getMessage()).build();
    }

    @ExceptionHandler(AccessDeniedException.class)
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public MessageResponse handleAccessDeniedException(AccessDeniedException ex) {
        return MessageResponse.builder().message("Access Denied: " + ex.getMessage()).build();
    }

    @ExceptionHandler(Exception.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public MessageResponse handleException(Exception ex) {
        return MessageResponse.builder().message("Internal Server Error: " + ex.getMessage()).build();
    }

    @ExceptionHandler(NoHandlerFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public MessageResponse handleNotFoundException(Exception ex) {
        return MessageResponse.builder().message("Not Found: " + ex.getMessage()).build();
    }
}