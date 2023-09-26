package com.iotwatch.auth.service;

import com.iotwatch.auth.model.Role;
import com.iotwatch.enums.EnumRole;

import java.util.Optional;

public interface RoleService {
    Optional<Role> findByName(EnumRole name);
}
