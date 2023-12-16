package com.iotwatch.auth.repository;

import com.iotwatch.auth.model.Role;
import com.iotwatch.auth.model.User;
import com.iotwatch.enums.EnumRole;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, Long> {
    @Query("{role:'?0'}")
    Optional<Role> findByRole(String role);
}
