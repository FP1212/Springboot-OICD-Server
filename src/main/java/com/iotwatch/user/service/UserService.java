package com.iotwatch.user.service;

import com.iotwatch.user.model.User;
import com.iotwatch.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

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
}
