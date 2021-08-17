import React, { useEffect, useState } from 'react';
import classes from './Recipes.module.css'
import axios from 'axios';
import RecipeCard  from '../../components/RecipeCard/RecipeCard';
import { Title } from '../../components/Title/Title';
import { useSelector } from 'react-redux';
import withErrorHandler from '../../components/ErrorHandler/withErrorHandler';

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);
    const isLoggedIn = useSelector(state => state.isLoggedIn)
    const userdata = useSelector(state => state.userdata)
    useEffect(() => {
        let url = `${process.env.REACT_ROOT_API_URL}/recipe/all`
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
                <RecipeCard key={idx} {...recipe} isLoggedIn={isLoggedIn} userdata={userdata} />
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

export default withErrorHandler(Recipes, axios);