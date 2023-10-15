package com.iotwatch.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@ConfigurationProperties(prefix = "iotwatch")
@ConfigurationPropertiesScan
public class ConfigProperties {
    private Long jwtExpirationToken;
    private Long jwtExpirationRefreshToken;
}
