package com.recipe.recipemanagement.dto;

import java.util.List;

import com.recipe.recipemanagement.models.Ingredient;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RecipeRequest {
    private Long id;
    private String recipeName;
    private String recipeCategory;
    private String recipeProcedure;
    private List<Ingredient> ingredients;
}
