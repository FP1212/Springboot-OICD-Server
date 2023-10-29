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
    private final String id;

    private String layoutId;

    @Field("x")
    private Integer x = 0;

    @Field("y")
    private Integer y = 0;

    @Field("h")
    private Integer h = 0;

    @Field("w")
    private Integer w = 0;

    @Field("minW")
    private Integer minW = 1;

    @Field("minH")
    private Integer minH = 1;
}
