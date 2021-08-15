package com.recipe.recipemanagement.mapper;

import com.recipe.recipemanagement.dto.RecipeRequest;
import com.recipe.recipemanagement.models.Recipe;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface RecipeRequestToRecipe {
    Recipe sourceToDestination(RecipeRequest source);
}

