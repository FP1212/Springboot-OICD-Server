package com.iotwatch.dashboard.repository;

import com.iotwatch.dashboard.model.Dashboard;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DashboardRepository extends MongoRepository<Dashboard, String> {

}