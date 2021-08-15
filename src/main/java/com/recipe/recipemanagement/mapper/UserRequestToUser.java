package com.recipe.recipemanagement.mapper;

import com.recipe.recipemanagement.dto.UserRequest;
import com.recipe.recipemanagement.models.User;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserRequestToUser {
    User sourceToDestination(UserRequest source);
}

