package com.iotwatch.dashboard.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@Builder
@AllArgsConstructor
@Document
public class LayoutItem {
    @Id
    private final Long id;

    private Long layoutId;

    @Field("x")
    @Builder.Default
    private Integer x = 0;

    @Field("y")
    @Builder.Default
    private Integer y = 0;

    @Field("h")
    @Builder.Default
    private Integer h = 0;

    @Field("w")
    @Builder.Default
    private Integer w = 0;

    @Field("minW")
    @Builder.Default
    private Integer minW = 1;

    @Field("minH")
    @Builder.Default
    private Integer minH = 1;
}
