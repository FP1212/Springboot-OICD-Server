package com.iotwatch.userCompany.repository;

import com.iotwatch.auth.model.User;
import com.iotwatch.userCompany.model.UserCompany;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface UserCompanyRepository extends MongoRepository<UserCompany, Long> {
    Optional<UserCompany> findByUser(User user);

}
