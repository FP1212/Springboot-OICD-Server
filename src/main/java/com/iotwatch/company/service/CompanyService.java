package com.iotwatch.company.service;

import com.iotwatch.company.dto.CompanyDto;
import com.iotwatch.company.model.Company;
import com.iotwatch.company.repository.CompanyRepository;
import com.iotwatch.dashboard.model.Dashboard;
import com.iotwatch.response.MessageResponse;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class CompanyService {

    private CompanyRepository companyRepository;

    public ResponseEntity<?> createCompany(CompanyDto companyDto) {
        if (companyRepository.existsCompanyByName(companyDto.getName())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Already exists a company with that name"));
        }

        if (companyRepository.existsCompanyByEmail(companyDto.getEmail())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Already exists a company associated with that email"));
        }

        Company company = Company.builder()
                .name(companyDto.getName())
                .email(companyDto.getEmail())
                .city(companyDto.getCity())
                .address(companyDto.getAddress())
                .zipCode(companyDto.getZipCode())
                .country(companyDto.getCountry())
                .phoneNumber(companyDto.getPhoneNumber())
                .industry(companyDto.getIndustry())
                .active(false)
                .build();

        companyRepository.save(company);

        return ResponseEntity.ok("New Company saved");
    }

}