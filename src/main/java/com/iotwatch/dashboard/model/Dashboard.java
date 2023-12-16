package com.iotwatch.dashboard.model;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@Document
public class Dashboard {

    @Id
    private final Long id;

    @NotBlank
    private String userId;

    @NotBlank
    private String companyId;
    private Layout layout;

    @Field("cols")
    @NotBlank
    private Integer cols = 12;

    @Size(max = 2)
    private List<Integer> margin;

    @NotBlank
    private boolean active;
    private boolean isDefault;

    @CreatedDate
    private Date createdDate;

    @LastModifiedDate
    private Date lastModifiedDate;
}