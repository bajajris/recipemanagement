package com.recipe.recipemanagement.Repositories;

import java.util.List;

import com.recipe.recipemanagement.models.Recipe;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
    @Modifying
    @Query(value = "update recipes r set r.is_approved = 1 where r.id = :id", nativeQuery = true)
    int approveRecipe(@Param("id") Long id);

    @Modifying
    @Query(value = "update recipes r set r.is_approved = 1 where r.is_approved = 0", nativeQuery = true)
    int approveAllRecipes();

    @Modifying
    @Query(value = "update recipes r set r.is_approved = 0 where r.id = :id", nativeQuery = true)
    int disapproveRecipe(@Param("id") Long id);

    @Query(value = "SELECT * FROM recipes r where r.is_approved = 1", nativeQuery = true)
    List<Recipe> getAllApprovedRecipes();
}
