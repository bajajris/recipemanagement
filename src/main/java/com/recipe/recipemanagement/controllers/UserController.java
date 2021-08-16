package com.recipe.recipemanagement.controllers;

import java.security.Principal;

import com.recipe.recipemanagement.Repositories.UserRepository;
import com.recipe.recipemanagement.dto.UserRequest;
import com.recipe.recipemanagement.mapper.UserRequestToUser;
import com.recipe.recipemanagement.models.Response;
import com.recipe.recipemanagement.models.Role;
import com.recipe.recipemanagement.models.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class UserController {


    @Autowired
    private UserRequestToUser mapper;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private UserRepository userRepository;


    @RequestMapping(value = "/user", method = RequestMethod.GET)
    @ResponseBody
    public Object currentUserName(Principal principal) {
        if(principal==null){
            return new Response(false);
        }
        return principal;
    }

    @PostMapping("/signup")
    public @ResponseBody User signupUser(@RequestBody UserRequest req){
        User user = mapper.sourceToDestination(req);
        user.setPassword(encoder.encode(req.getPassword()));
        user.setRole(new Role(1, "USER"));   
        return userRepository.save(user);
    }

}