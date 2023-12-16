package com.iotwatch.company.repository;

import com.iotwatch.company.model.Company;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface CompanyRepository extends MongoRepository<Company, String> {
    @Query("{name:'?0'}")
    boolean existsCompanyByName(String name);

    @Query("{email:'?0'}")
    boolean existsCompanyByEmail(String email);
}