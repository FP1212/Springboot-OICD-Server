package com.keycloak.server.enums;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public enum EnumStatusResponse {
    ERROR(0),
    SUCCESS(1),
    BAD_CREDENTIALS(2);

    @Getter private int status;
}
