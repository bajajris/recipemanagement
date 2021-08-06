package com.recipe.recipemanagement.Repositories;

import com.recipe.recipemanagement.models.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    
}
