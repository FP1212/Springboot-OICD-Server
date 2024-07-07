package com.iotwatch.dashboard.controller;

import com.iotwatch.auth.details.UserDetailsImpl;
import com.iotwatch.dashboard.request.DashboardRequest;
import com.iotwatch.dashboard.service.DashboardService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/dashboard")
@RequiredArgsConstructor
public class DashboardController {
    private final DashboardService dashboardService;

    @GetMapping
    public ResponseEntity<?> getAll(@AuthenticationPrincipal UserDetailsImpl userDetails) {
        SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return dashboardService.getAllByCompanyAndUser(userDetails.getId(), null);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@AuthenticationPrincipal UserDetailsImpl userDetails, @PathVariable String id) {
        return dashboardService.get(
                DashboardRequest.builder()
                .dashboardId(id)
                .userId(userDetails.getId())
                .companyId(null)
                .build()
        );
    }

    @PostMapping("/")
    public ResponseEntity<?> create(@AuthenticationPrincipal UserDetailsImpl userDetails, @RequestBody DashboardRequest dashboardRequest) {
        dashboardRequest.setUserId(userDetails.getId());
        dashboardRequest.setCompanyId(null);
        return dashboardService.create(dashboardRequest);
    }

    @PatchMapping("/")
    public ResponseEntity<?> update(@AuthenticationPrincipal UserDetailsImpl userDetails, @RequestBody DashboardRequest dashboardRequest) {
        dashboardRequest.setUserId(userDetails.getId());
        dashboardRequest.setCompanyId(null);
        return dashboardService.update(dashboardRequest);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@AuthenticationPrincipal UserDetailsImpl userDetails, @PathVariable String id) {
        return dashboardService.delete(
                DashboardRequest.builder()
                        .dashboardId(id)
                        .userId(userDetails.getId())
                        .companyId(null)
                        .build()
        );
    }
}
