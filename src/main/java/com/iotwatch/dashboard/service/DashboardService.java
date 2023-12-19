package com.iotwatch.dashboard.service;

import com.iotwatch.dashboard.dto.DashboardDto;
import com.iotwatch.dashboard.repository.DashboardRepository;
import com.iotwatch.dashboard.request.DashboardRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DashboardService {
    private final DashboardRepository dashboardRepository;

    public ResponseEntity<List<DashboardDto>> getAllByCompanyAndUser(String userId, String companyId) {
        List<DashboardDto> dashboardDtoList = dashboardRepository.findAllProjectedByUserIdAndCompanyId(companyId, userId);
        return ResponseEntity.ok(null);
    }

    public ResponseEntity<?> get(DashboardRequest build) {
        return ResponseEntity.ok(null);
    }

    public ResponseEntity<?> create(DashboardRequest dashboardRequest) {
        return ResponseEntity.ok(null);
    }

    public ResponseEntity<?> update(DashboardRequest dashboardRequest) {
        return ResponseEntity.ok(null);
    }

    public ResponseEntity<?> delete(DashboardRequest build) {
        return ResponseEntity.ok(null);
    }
}
