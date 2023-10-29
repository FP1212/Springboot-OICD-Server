package com.iotwatch.dashboard.repository;

import com.iotwatch.dashboard.model.Layout;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LayoutRepository extends MongoRepository<Layout, String> {

}