package com.iotwatch.auth.repository;

import com.iotwatch.auth.model.Role;
import com.iotwatch.enums.EnumRole;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface RoleRepository extends MongoRepository<Role, String> {
}
