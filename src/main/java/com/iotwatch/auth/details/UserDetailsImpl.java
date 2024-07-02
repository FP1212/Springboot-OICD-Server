package com.iotwatch.auth.details;

import com.iotwatch.auth.model.Role;
import com.iotwatch.auth.model.User;
import com.iotwatch.company.model.Company;
import com.iotwatch.enums.EnumRole;
import com.iotwatch.user.service.CustomUserDetails;
import com.iotwatch.userCompany.model.UserCompany;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.apache.commons.collections4.CollectionUtils;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.*;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
public class UserDetailsImpl implements CustomUserDetails {
    private String id;

    @NotBlank
    @Size(max = 20)
    private String username;

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;

    @NotBlank
    @Size(min = 6, max = 60)
    private String password;

    private Collection<? extends GrantedAuthority> authorities;

    public static UserDetailsImpl build(User user) {
        Set<Role> roles = user.getRoles();
        List<GrantedAuthority> authorities = new ArrayList<>();

        if (CollectionUtils.isNotEmpty(roles)) {
            authorities = user.getRoles().stream()
                    .flatMap(role -> role.getPrivileges().stream())
                    .map(privilege -> new SimpleGrantedAuthority(privilege.getAuthority()))
                    .collect(Collectors.toList());
        } else {
            authorities = List.of(new SimpleGrantedAuthority(EnumRole.GUEST.name()));
        }

        return new UserDetailsImpl(
                user.getId(),
                user.getUsername(),
                user.getEmail(),
                user.getPassword(),
                authorities);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getUsername() {
        return this.username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        UserDetailsImpl user = (UserDetailsImpl) o;
        return Objects.equals(id, user.id);
    }
}
