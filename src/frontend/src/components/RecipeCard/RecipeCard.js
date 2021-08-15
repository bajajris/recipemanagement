import React from 'react';
import { Card } from 'react-bootstrap';
import classes from './RecipeCard.module.css';

export const RecipeCard = (props) => {
    return (
        <div className={classes.RecipeCard}>
            <Card style={{ width: '100%' }}>
                <Card.Body>
                    <Card.Title>{props.recipeName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.recipeCategory}</Card.Subtitle>
                    <ul>
                        {props.ingredients.map((ingredient, indx) => {
                            return (
                                <li key={indx}>{ingredient.ingredientName}</li>
                            );
                        })}
                    </ul>
                    <Card.Text>
                        {props.recipeProcedure}
                    </Card.Text>
                    {/* <Card.Link href="#">Card Link</Card.Link> */}
                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </div>
    );
}