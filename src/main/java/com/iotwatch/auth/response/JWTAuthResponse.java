package com.iotwatch.auth.response;

import lombok.*;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JWTAuthResponse {
    private String token;
    private String refreshToken;

    @Getter(AccessLevel.NONE)
    @Setter(AccessLevel.NONE)
    @Builder.Default
    private String type = "Bearer";
    private String id;
    private String email;
    private List<String> roles;
}
