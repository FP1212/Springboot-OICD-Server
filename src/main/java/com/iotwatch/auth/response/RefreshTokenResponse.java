package com.iotwatch.auth.response;

import lombok.*;

@Data
@AllArgsConstructor
public class RefreshTokenResponse {
    private String accessToken;
    private String refreshToken;
    private final String tokenType = "Bearer";
}
