package com.iotwatch.home.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.net.http.HttpRequest;

@Controller
public class HomeController {

    @RequestMapping(value = "/home")
    public String login(Model model) {
        return "index";
    }

    @RequestMapping(value = "/")
    public String index(Model model) {
        return "index";
    }

    @GetMapping(value = "/testing")
    public ResponseEntity getName(HttpRequest request) {
        return ResponseEntity.ok("PROBANDO");
    }
}
