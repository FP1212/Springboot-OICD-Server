package com.iotwatch.auth.repository;

import com.iotwatch.auth.model.Privilege;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface PrivilegeRepository extends MongoRepository<Privilege, String> {
    @Query("{name:'?0'}")
    Optional<Privilege> findByName(String name);
}
