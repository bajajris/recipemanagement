
package com.recipe.recipemanagement.models;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "recipes")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Recipe implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String recipeName;
    private String recipeCategory;
    private String recipeProcedure;
    private boolean isApproved;

    @OneToMany(targetEntity = Ingredient.class, fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(referencedColumnName = "id", name = "ri_fk")
    private List<Ingredient> ingredients;

    // @ManyToOne(targetEntity = User.class, fetch = FetchType.EAGER)
    // @JoinColumn(referencedColumnName = "user_id", name = "ur_fk")
    // private User recipeUser;
}