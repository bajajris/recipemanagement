package com.recipe.recipemanagement.controllers;


import javax.servlet.http.HttpServletResponse;

// import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class HomeController {

    @GetMapping("redirect")
    public String getLogin() {
        return "logoutsuccess";
    }

    @GetMapping("home")
    public int getHome() {
        return HttpServletResponse.SC_OK;
    }

}