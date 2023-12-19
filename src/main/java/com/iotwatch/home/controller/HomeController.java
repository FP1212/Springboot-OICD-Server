package com.iotwatch.home.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin(origins = "*", maxAge = 3600)
@Controller()
@RequestMapping(value = "/")
public class HomeController {

    @RequestMapping(value = {"/", "/home"})
    public String index(Model model) {
        return "index";
    }

    //@RequestMapping(value = { "/", "/{x:[\\w\\-]+}", "/{x:^(?!api$).*$}/*/{y:[\\w\\-]+}","/error"  })
    @RequestMapping(value = {"{path:^(?!api|static|favicon\\.ico).*$}"})
    public String redirect() {
        return "forward:/";
    }
}
