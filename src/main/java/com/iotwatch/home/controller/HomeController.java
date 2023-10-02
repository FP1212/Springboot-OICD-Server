package com.iotwatch.home.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin(origins = "*", maxAge = 3600)
@Controller
public class HomeController {

    @GetMapping(value = {"/", "/home", "login"})
    public String index(Model model) {
        return "index";
    }
}
