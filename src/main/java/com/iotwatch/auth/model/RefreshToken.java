package com.iotwatch.auth.model;

import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;


@Data
@Builder
@AllArgsConstructor
@Document
public class RefreshToken {

    @Id
    private final String id;

    @NotBlank
    private User user;

    @NotBlank
    private final String token;

    @NotBlank
    private final Instant expirationDate;

}