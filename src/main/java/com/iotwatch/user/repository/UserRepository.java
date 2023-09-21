package com.iotwatch.user.repository;

import com.iotwatch.user.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {

    @Query("{name:'?0'}")
    User findUserByName(String name);

    public long count();
}