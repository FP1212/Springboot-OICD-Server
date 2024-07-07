package com.iotwatch.auth.service.impl;

import com.iotwatch.auth.details.UserDetailsImpl;
import com.iotwatch.auth.model.User;
import com.iotwatch.auth.repository.UserRepository;
import com.iotwatch.userCompany.model.UserCompany;
import com.iotwatch.userCompany.repository.UserCompanyRepository;
import lombok.AllArgsConstructor;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {

    private UserRepository userRepository;
    private MessageSource messageSource;

    @Override
    public UserDetailsImpl loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException(messageSource.getMessage("user.not.found", null, LocaleContextHolder.getLocale())));

        return UserDetailsImpl.build(user);
    }
}
