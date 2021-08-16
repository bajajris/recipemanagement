package com.recipe.recipemanagement.Repositories;

import com.recipe.recipemanagement.models.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {

    @Query(value = "SELECT * FROM users where username=:username", nativeQuery = true)
    public User findByUsername(@Param("username") String username);
}
