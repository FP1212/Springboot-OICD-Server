package com.iotwatch.auth.service.impl;

import com.iotwatch.auth.model.Role;
import com.iotwatch.auth.repository.RoleRepository;
import com.iotwatch.auth.service.RoleService;
import com.iotwatch.enums.EnumRole;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Optional;

public class RoleServiceImpl implements RoleService {
    @Autowired
    RoleRepository roleRepository;

    @Override
    public Optional<Role> findByName(EnumRole name) {
        return roleRepository.findByName(name);
    }
}
