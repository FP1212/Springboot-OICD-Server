package com.iotwatch.auth.repository;

import com.iotwatch.auth.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {

    @Query("{username:'?0'}")
    Optional<User> findByName(String username);

    @Query("{email:'?0'}")
    Optional<User> findByEmail(String email);

    long count();

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}