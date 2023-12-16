package com.iotwatch.dashboard.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class DashboardRequest {
    private Long dashboardId;
    private Long userId;
    private Long companyId;
}
