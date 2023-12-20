package com.iotwatch.auth.repository;

import com.iotwatch.auth.model.RefreshToken;
import com.iotwatch.auth.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface RefreshTokenRepository extends MongoRepository<RefreshToken, String> {
    @Query("{user:'?0'}")
    Optional<RefreshToken> findByUser(User user);

    @Query("{token:'?0'}")
    Optional<RefreshToken> findByToken(String token);

    @Query("{user:'?0'}")
    void deleteByUser(User user);
}