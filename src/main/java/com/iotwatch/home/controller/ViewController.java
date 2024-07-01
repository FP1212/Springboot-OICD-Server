package com.iotwatch.home.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin(origins = "*", maxAge = 3600)
@Controller()
public class ViewController {

    @GetMapping(value = {
            "/**/{path:[^\\.]*}",
            "/{path:[^\\.]*}",
    })
    public String index() {
        return "forward:/index.html";
    }
}
