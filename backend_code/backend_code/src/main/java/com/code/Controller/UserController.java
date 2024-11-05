package com.code.Controller;

import com.code.Model.Users;

import com.code.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public Users signup(@RequestBody Users users) {
        return userService.signUp(users);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Users users) {
        String response = userService.verify(users);

        if (response.equals("Login Successful🎉")) {
            return new ResponseEntity<>(response, HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
        }
    }

}
