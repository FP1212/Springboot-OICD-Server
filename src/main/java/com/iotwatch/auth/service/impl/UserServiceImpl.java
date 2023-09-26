package com.iotwatch.auth.service.impl;

import com.iotwatch.auth.dto.SignUpRequestDto;
import com.iotwatch.auth.model.Role;
import com.iotwatch.auth.model.User;
import com.iotwatch.auth.repository.RoleRepository;
import com.iotwatch.auth.repository.UserRepository;
import com.iotwatch.auth.service.UserService;
import com.iotwatch.enums.EnumRole;
import com.iotwatch.response.MessageResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository userRepository;

    public User save(User user) {
        return userRepository.save(user);
    }

    public Optional<User> get(String id) {
        return userRepository.findById(id);
    }

    public void delete(String id) {
        userRepository.deleteById(id);
    }

    @Override
    public UserDetailsService userDetailsService() {
        return new UserDetailsService() {
            @Override
            public UserDetails loadUserByUsername(String username) {
                return userRepository.findByEmail(username)
                        .orElseThrow(() -> new UsernameNotFoundException("User not found"));
            }
        };
    }
}
