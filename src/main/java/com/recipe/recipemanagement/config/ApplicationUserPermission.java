package com.recipe.recipemanagement.config;


public enum ApplicationUserPermission {
    // STUDENT_READ("student:read"),
    // STUDENT_WRITE("student:write"),
    RECIPE_READ("recipe:read"),
    RECIPE_APPROVE("recipe:approve");

    private final String permission;

    ApplicationUserPermission(String permission) {
        this.permission = permission;
    }

    public String getPermission() {
        return permission;
    }
}