package com.iotwatch.auth.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;

import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document
public class Role implements GrantedAuthority {
    @Id
    private String id;

    @NotBlank
    @Size(max = 50)
    private String role;

    @Override
    public String getAuthority() {
        return role;
    }

    @DBRef
    private Set<Privilege> privileges;
}