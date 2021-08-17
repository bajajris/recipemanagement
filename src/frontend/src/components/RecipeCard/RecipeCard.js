import axios from 'axios';
import React from 'react';
import { Card } from 'react-bootstrap';
import withErrorHandler from '../ErrorHandler/withErrorHandler';
import classes from './RecipeCard.module.css';

const RecipeCard = (props) => {

    let links = ''


    const approveRecipe = (e, recipeId) => {
        e.preventDefault();
        var url = `${process.env.REACT_ROOT_API_URL}/recipe/approve/${recipeId}`;

        axios({
            method: "post",
            url: url,
            withCredentials: true
        })
            .then(function (response) {
                console.log("success")
                console.log(response);
                window.location.reload();
            })
            .catch(function (error) {
                console.log("error")
                console.log(error);
            });
    }

    const disapproveRecipe = (e, recipeId) => {
        e.preventDefault();
        var url = `${process.env.REACT_ROOT_API_URL}/recipe/disapprove/${recipeId}`;

        axios({
            method: "post",
            url: url,
            withCredentials: true
        })
            .then(function (response) {
                console.log("success")
                console.log(response);
                window.location.reload();
            })
            .catch(function (error) {
                console.log("error")
                console.log(error);
            });
    }

    if (props.isLoggedIn && props.userdata.authenticated) {
        if (props.userdata.authorities.some(x => x.authority === "ROLE_ADMIN")) {
            if (props.approved === false) {
                links = (<button className={classes.approvelink} onClick={(e) => approveRecipe(e, props.id)}>Approve</button>)
            } else {
                links = (<button className={classes.disapprovelink} onClick={(e) => disapproveRecipe(e, props.id)}>Disapprove</button>)
            }
        }
    }

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
                    {
                        links
                    }
                    {/* <Card.Link href="#">Card Link</Card.Link> */}
                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </div>
    );
}

export default withErrorHandler(RecipeCard, axios);