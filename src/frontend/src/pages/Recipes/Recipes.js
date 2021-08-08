import React, { useEffect, useState } from 'react';
import classes from './Recipes.module.css'
import { NavBar } from '../../components/NavBar/NavBar';
import { Card } from 'react-bootstrap';
import axios from 'axios';
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
                <div key={idx}>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title>{recipe.recipeName}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{recipe.recipeCategory}</Card.Subtitle>
                            <Card.Text>
                            {recipe.recipeProcedure}
                            </Card.Text>
                            {/* <Card.Link href="#">Card Link</Card.Link> */}
                            {/* <Card.Link href="#">Another Link</Card.Link> */}
                        </Card.Body>
                    </Card>
                </div>
            );
        })
    }

    return (
        <>
            <div className={classes.Recipes}>
                {allRecipes}
            </div>
        </>
    );
}