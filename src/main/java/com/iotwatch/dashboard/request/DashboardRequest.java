package com.iotwatch.dashboard.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor
@Builder
public class DashboardRequest {
    private String dashboardId;
    private String userId;
    private String companyId;
}
