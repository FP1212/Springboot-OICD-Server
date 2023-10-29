package com.iotwatch.company.controller;

import com.iotwatch.company.dto.CompanyDto;
import com.iotwatch.company.service.CompanyService;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
public class CompanyController {
    private CompanyService companyService;

    @PostMapping("/create")
    public ResponseEntity create(@Valid @RequestBody CompanyDto companyDto) {
        return  companyService.createCompany(companyDto);
    }
}
