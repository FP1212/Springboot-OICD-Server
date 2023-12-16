package com.iotwatch.dashboard.repository;

import com.iotwatch.dashboard.dto.DashboardDto;
import com.iotwatch.dashboard.model.Dashboard;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface DashboardRepository extends MongoRepository<Dashboard, Long> {
    @Query("{active: 1}")
    List<DashboardDto> findAllProjectedByUserIdAndCompanyId(Long userId, Long companyId);
}