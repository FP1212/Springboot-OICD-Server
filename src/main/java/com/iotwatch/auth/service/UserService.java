package com.iotwatch.auth.service;

import com.iotwatch.auth.dto.SignUpRequestDto;
import com.iotwatch.auth.model.User;
import com.iotwatch.response.MessageResponse;
import org.springframework.amqp.core.Message;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.Optional;

public interface UserService {
    UserDetailsService userDetailsService();
    User save(User user);
    Optional<User> get(String id);
    void delete(String id);
}
