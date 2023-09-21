package com.iotwatch.user.controller;

import com.iotwatch.user.model.User;
import com.iotwatch.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/save")
    public ResponseEntity saveUser(@RequestBody User user) {
        return ResponseEntity.ok(userService.save(user));
    }

    @GetMapping("/get/{id}")
    public ResponseEntity getUser(@PathVariable String id) {
        return ResponseEntity.ok(userService.get(id));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteUser (@PathVariable String id) {
        userService.delete(id);
        return ResponseEntity.ok("");
    }
}
