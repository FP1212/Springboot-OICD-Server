package com.iotwatch.userCompany.model;

import com.iotwatch.auth.model.User;
import com.iotwatch.company.model.Company;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document
@Data
@Builder
@AllArgsConstructor
public class UserCompany {
    private User user;
    private Company company;

    @Builder.Default
    private boolean active = false;

    @CreatedDate
    private Date createdDate;

    @LastModifiedDate
    private Date lastModifiedDate;
}
