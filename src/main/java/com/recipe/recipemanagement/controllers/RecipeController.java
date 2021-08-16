package com.recipe.recipemanagement.controllers;

import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;
import com.recipe.recipemanagement.Repositories.RecipeRepository;
import com.recipe.recipemanagement.Repositories.UserRepository;
import com.recipe.recipemanagement.dto.RecipeRequest;
import com.recipe.recipemanagement.mapper.RecipeRequestToRecipe;
import com.recipe.recipemanagement.models.Recipe;
import com.recipe.recipemanagement.models.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/recipe")
@CrossOrigin
public class RecipeController {

    @Autowired
    private RecipeRepository recipeRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RecipeRequestToRecipe mapper;

    @PostMapping("/add")
    public @ResponseBody Recipe addRecipe(@RequestBody RecipeRequest req) {
        Recipe recipe = mapper.sourceToDestination(req);
        recipe.setApproved(false);
        recipe.setRecipeUser(userRepository.findByUsername(req.getUser()));
        return recipeRepository.save(recipe);
    }

    @GetMapping("/all")
    public @ResponseBody Object getAllRecipes() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth.getAuthorities().stream().anyMatch(x -> x.getAuthority().equals("ROLE_ADMIN"))) {
            return recipeRepository.findAll();
        }
        return recipeRepository.getAllApprovedRecipes();
    }

    // @GetMapping("/approved/all")
    // public @ResponseBody Object getApprovedRecipes() {
    //     return recipeRepository.getAllApprovedRecipes();
    // }

    @PostMapping("/all/approve")
    public @ResponseBody Object approveAllRecipes() {
        return recipeRepository.approveAllRecipes();
    }

    @PostMapping(value = "/approve/{id}")
    @Transactional
    public Optional<Recipe> approveRecipe(@PathVariable Long id) {

        Optional<Recipe> recipe = recipeRepository.findById(id);
        recipeRepository.approveRecipe(id);
        return recipe;
    }

    @PostMapping(value = "/disapprove/{id}")
    @Transactional
    public Optional<Recipe> disapproveRecipe(@PathVariable Long id) {

        Optional<Recipe> recipe = recipeRepository.findById(id);
        recipeRepository.disapproveRecipe(id);
        return recipe;
    }

}
