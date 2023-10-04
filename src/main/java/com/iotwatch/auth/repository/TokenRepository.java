package com.iotwatch.auth.repository;

import com.iotwatch.auth.model.Token;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface TokenRepository extends MongoRepository<Token, String> {
    @Query("{series:'?0'}")
    Token findBySeries(String series);
    @Query("{username:'?0'}")
    Token findByUsername(String username);
}