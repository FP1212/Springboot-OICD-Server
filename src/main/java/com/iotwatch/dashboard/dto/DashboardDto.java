package com.iotwatch.dashboard.dto;

import com.iotwatch.dashboard.model.Layout;
import java.util.List;

public interface DashboardDto {
     String getId();
     Layout getLayout();
     Integer getCols();
     List<Integer> getMargin();
     boolean getActive();
     boolean getIsDefault();
}
