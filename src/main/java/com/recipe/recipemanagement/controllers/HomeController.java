package com.recipe.recipemanagement.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class HomeController {

    @GetMapping("login")
    public String getLogin() {
        return "login";
    }

    @GetMapping("home")
    public String getHome() {
        return "index";
    }

}