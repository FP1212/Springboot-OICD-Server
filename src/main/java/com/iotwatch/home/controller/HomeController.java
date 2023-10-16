package com.iotwatch.home.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "*", maxAge = 3600)
@Controller
public class HomeController {

    @RequestMapping(value = {"/", "/home"})
    public String index(Model model) {
        return "index";
    }

    //@RequestMapping(value = { "/", "/{x:[\\w\\-]+}", "/{x:^(?!api$).*$}/*/{y:[\\w\\-]+}","/error"  })
    @RequestMapping(value = {"{path:^(?!api|static|favicon\\.ico).*$}", "/error"})
    public String redirect() {
        return "forward:/";
    }
}
