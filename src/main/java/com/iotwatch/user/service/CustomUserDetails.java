package com.iotwatch.user.service;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

public interface CustomUserDetails extends UserDetails {
    String getEmail();
    String getCompanyId();
    String getCompanyName();
    Collection<? extends GrantedAuthority> getAuthorities();
}
