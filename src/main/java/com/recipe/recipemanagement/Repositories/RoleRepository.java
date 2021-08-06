package com.recipe.recipemanagement.Repositories;

import com.recipe.recipemanagement.models.Role;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository<Role, Long>{
    
}
