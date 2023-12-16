package com.iotwatch.auth.service.impl;

import com.iotwatch.auth.details.UserDetailsImpl;
import com.iotwatch.auth.model.User;
import com.iotwatch.auth.repository.UserRepository;
import com.iotwatch.userCompany.model.UserCompany;
import com.iotwatch.userCompany.repository.UserCompanyRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private UserRepository userRepository;
    private UserCompanyRepository userCompanyRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByName(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));

        return userCompanyRepository.findByUser(user)
                .map(UserDetailsImpl::build)
                .orElseGet(() -> UserDetailsImpl.build(
                        UserCompany.builder()
                                .user(user)
                                .build())
                );
    }
}
