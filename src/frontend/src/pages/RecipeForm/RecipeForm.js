import axios from 'axios';
import React, {useRef, useState } from 'react';
import { Button, Col, FloatingLabel, Form, FormControl, InputGroup, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
// import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import withErrorHandler from '../../components/ErrorHandler/withErrorHandler';
import classes from './RecipeForm.module.css'

const RecipeForm = (props) => {

    const [ingredientInputValue, setIngredientInputValue] = useState('');

    const [bodyFormData, setBodyFormData] = useState({
        recipeName: '',
        recipeCategory: 'VEG',
        recipeProcedure: '',
        ingredients: [{
            ingredientName: ''
        }]
    });

    const inputRef = useRef();
    // const isLoggedIn = useSelector(state => state.isLoggedIn);
    const history = useHistory();

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Click to delete from list
        </Tooltip>
    );

    const addIngredient = (e) => {
        e.preventDefault();
        setBodyFormData(prevState => {
            const prevIngredients = [...prevState.ingredients]
            if (prevIngredients.some(ing => ing.ingredientName === ingredientInputValue) || ingredientInputValue === '') {
                console.log("Exists")
                return { ...prevState };
            } else {
                if (prevIngredients.length > 0 && prevIngredients[0].ingredientName === '') {
                    prevIngredients.shift(); //remove first empty initial ingredient
                }
                return { ...prevState, ingredients: [...prevIngredients, { ingredientName: ingredientInputValue }] };
            }
        });
        setIngredientInputValue('')
        inputRef.current.focus();
    }


    const handleIngredientInputChange = (e) => {
        e.preventDefault();
        setIngredientInputValue(e.target.value)
    }

    const handleInputChange = (event) => {
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setBodyFormData(prevState => ({ ...prevState, [name]: value }));
    }

    const submitRecipe = (e) => {
        e.preventDefault();
        var url = 'http://localhost:8080/recipe/add';

        axios({
            method: "post",
            url: url,
            data: bodyFormData,
            // headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true
        })
            .then(function (response) {
                console.log(response.headers);
                console.log("success")
                console.log(response);
                history.push("/")
            })
            .catch(function (error) {
                console.log("error")
                console.log(error);
            });
    }


    const deleteTag = (ing, idx) => {
        const allIng = [...bodyFormData.ingredients]
        const toRemove = allIng.indexOf(ing);
        allIng.splice(toRemove, 1);
        setBodyFormData(prevState => ({ ...prevState, ingredients: [...allIng] }));
    }


    return (
        
        <div className={`container ${classes.RecipeForm}`}>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Recipe Name</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>#</InputGroup.Text>
                        <FormControl name="recipeName" onChange={(e) => handleInputChange(e)} value={bodyFormData.recipeName} id="inlineFormInputGroupRecipeName" placeholder="Enter Recipe Name " />
                    </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label
                        className="me-sm-2"
                        htmlFor="inlineFormCustomSelect"
                    >
                        Select Category
                    </Form.Label>
                    <Form.Select name = "recipeCategory" onChange={(e) => handleInputChange(e)} value={bodyFormData.recipeCategory} className="me-sm-2" id="inlineFormCustomSelect">
                        <option value="VEG">VEG</option>
                        <option value="NON-VEG">NON-VEG</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Row className="g-2">
                        <Col lg>
                            <FormControl ref={inputRef} onChange={(e) => handleIngredientInputChange(e)} value={ingredientInputValue} id="inlineFormInputGroupIngredinets" placeholder="Enter ingredients" />
                        </Col>
                        <Col sm>
                            <Button variant="success" onClick={(e) => addIngredient(e)}>Add</Button>
                        </Col>
                    </Row>
                    <div className={classes.tags}>
                        {bodyFormData.ingredients.map((ing, idx) => {
                            if (ing.ingredientName !== '')
                                return (
                                    <span className={classes.tag} key={idx} onClick={() => deleteTag(ing, idx)} style={{ "--color": "#41b883" }}>
                                        <OverlayTrigger
                                            placement="bottom"
                                            delay={{ show: 0, hide: 0 }}
                                            overlay={renderTooltip}><span>{ing.ingredientName}</span></OverlayTrigger>
                                    </span>
                                )
                            else
                                return null;
                        })}
                    </div>

                </Form.Group>
                <Form.Group className="mb-3">
                    <FloatingLabel controlId="floatingTextarea2" label="Procedure">
                        <Form.Control
                            as="textarea"
                            placeholder="Enter recipe procedure"
                            style={{ height: '200px' }}
                            onChange={(e) => handleInputChange(e)}
                            name = "recipeProcedure" 
                            value={bodyFormData.recipeProcedure}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Button variant="primary" onClick={(e) => submitRecipe(e)}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}


export default withErrorHandler(RecipeForm, axios);