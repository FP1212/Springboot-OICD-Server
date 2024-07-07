package com.iotwatch.auth.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document
public class Privilege implements GrantedAuthority {
    @Id
    private String id;

    @NotBlank
    @Size(max = 50)
    private String name;

    @Override
    public String getAuthority() {
        return name;
    }
}