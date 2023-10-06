package com.iotwatch.dashboard.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
public class DashboardController {

    @PostMapping("/test")
    public ResponseEntity<?> test() {
        return ResponseEntity.ok("probando");
    }
    
}
