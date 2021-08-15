import React, { useEffect, useState } from 'react';
import classes from './Recipes.module.css'
import axios from 'axios';
import { RecipeCard } from '../../components/RecipeCard/RecipeCard';
import { Title } from '../../components/Title/Title';
export const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        let url = "http://localhost:8080/recipe/all"
        const fetchRecipes = async () => {
            axios({
                method: 'get',
                url: url,
                withCredentials: true
            }).then((res) => {
                console.log(res.data);
                setRecipes(res.data)
            }).catch((err) => {
                console.error(err);
            })
            // const response = await fetch(`${process.env.REACT_APP_API_ROOT_URL}/teams`);
        }
        fetchRecipes();

    }, [])

    let allRecipes = "No recipes found in the database"

    if (recipes.length !== 0) {
        allRecipes = recipes.map((recipe, idx) => {
            return (
                <RecipeCard key={idx} {...recipe} />
            );
        })
    }

    return (
        <>
            <section className={classes.RecipesSection}>
                <Title name="All Recipes" />
                {allRecipes}
            </section>
        </>
    );
}