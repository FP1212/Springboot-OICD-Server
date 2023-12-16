package com.iotwatch.dashboard.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NonNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@Document
public class Layout {
    @Id
    private final Long id;

    private List<LayoutItem> layoutItem;

    @Field("isDraggable")
    private boolean isDraggable = true;

    @Field("isResizable")
    private boolean isResizable = true;

    @Field("isBounded")
    private boolean isBounded = true;
}
