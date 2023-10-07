package com.iotwatch.auth.model;

import com.iotwatch.enums.EnumRole;
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
public class Role implements GrantedAuthority {
    @Id
    private String id;

    @NotBlank
    @Size(max = 20)
    private String role;

    @Override
    public String getAuthority() {
        return role;
    }
}