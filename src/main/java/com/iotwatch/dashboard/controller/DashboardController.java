package com.iotwatch.dashboard.controller;

import com.iotwatch.auth.details.UserDetailsImpl;
import com.iotwatch.dashboard.request.DashboardRequest;
import com.iotwatch.dashboard.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/dashboard")
@RequiredArgsConstructor
public class DashboardController {
    private DashboardService dashboardService;

    @GetMapping("/")
    public ResponseEntity<?> getAll(@AuthenticationPrincipal UserDetailsImpl userDetails) {
        return dashboardService.getAllByCompanyAndUser(userDetails.getId(), userDetails.getCompanyId());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@AuthenticationPrincipal UserDetailsImpl userDetails, @PathVariable Long id) {
        return dashboardService.get(
                DashboardRequest.builder()
                .dashboardId(id)
                .userId(userDetails.getId())
                .companyId(userDetails.getCompanyId())
                .build()
        );
    }

    @PostMapping("/")
    public ResponseEntity<?> create(@AuthenticationPrincipal UserDetailsImpl userDetails, @RequestBody DashboardRequest dashboardRequest) {
        dashboardRequest.setUserId(userDetails.getId());
        dashboardRequest.setCompanyId(userDetails.getCompanyId());
        return dashboardService.create(dashboardRequest);
    }

    @PatchMapping("/")
    public ResponseEntity<?> update(@AuthenticationPrincipal UserDetailsImpl userDetails, @RequestBody DashboardRequest dashboardRequest) {
        dashboardRequest.setUserId(userDetails.getId());
        dashboardRequest.setCompanyId(userDetails.getCompanyId());
        return dashboardService.update(dashboardRequest);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@AuthenticationPrincipal UserDetailsImpl userDetails, @PathVariable Long id) {
        return dashboardService.delete(
                DashboardRequest.builder()
                        .dashboardId(id)
                        .userId(userDetails.getId())
                        .companyId(userDetails.getCompanyId())
                        .build()
        );
    }
}
