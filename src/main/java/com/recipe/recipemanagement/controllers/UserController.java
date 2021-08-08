package com.recipe.recipemanagement.controllers;

import java.security.Principal;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class UserController {

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    @ResponseBody
    public Principal currentUserName(Principal principal) {
        return principal;
    }
}