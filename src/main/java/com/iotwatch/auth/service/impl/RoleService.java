package com.iotwatch.auth.service.impl;

import com.iotwatch.auth.model.Role;
import com.iotwatch.auth.repository.RoleRepository;
import com.iotwatch.enums.EnumRole;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class RoleService {
    @Autowired
    RoleRepository roleRepository;

    public Optional<Role> findById(String id) {
        return roleRepository.findById(id);
    }
}
