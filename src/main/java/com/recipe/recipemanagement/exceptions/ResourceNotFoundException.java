package com.recipe.recipemanagement.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST, reason = "login not found")
public class ResourceNotFoundException extends RuntimeException {
}