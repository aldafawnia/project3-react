import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {
    // BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
} from "react-router-dom";

import Card from 'react-bootstrap/Card';
// import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default function LandingPage(){

    const [categories, setProducts] = useState([]);

    const history = useHistory();

    useEffect(() => {
        fetchApi();
    },[])

    async function fetchApi(){
        let response = await axios.get('https://8080-ce658780-baa8-4628-bf51-6d14254b95b4.ws-us03.gitpod.io/api/categories');
        setProducts(response.data);
    }

    function renderProduct(categoryProduct){
        let jsx = []
        for(let category of categories){
            if(categoryProduct === category.category_name){
                console.log(categoryProduct)
            console.log(category.category_name)
                for(let product of category.products){
                    jsx.push(
                    <React.Fragment>
                      <Card style={{width:"25%"}}>
                        <Card.Body>
                            <Card.Img variant="top" src={product.image}/>
                            <Card.Text>
                                <p style={{fontWeight:"bold"}}>{product.product_name}</p>
                                <p>{product.description}</p>
                                <p>Price: ${(product.price/100).toFixed(2)}</p>
                            </Card.Text>
                            <div style={{textAlign:"center"}}>
                                <Button variant="dark">Add To Cart</Button>
                            </div>
                        </Card.Body>
                      </Card>
                    </React.Fragment>
                )
                }
            }
        }
        return jsx;
    }

    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/product/vegan">
                    {renderProduct("Vegan")}
                    <h1>gbybgyby</h1>
                </Route>
                <Route exact path="/product/glutenfree">
                    {renderProduct("Gluten Free")}
                </Route>
                <Route exact path="/product/crueltyfree">
                    {renderProduct("Cruelty Free")}
                </Route>
                <Route exact path="/product/milk">
                    {renderProduct("Milk")}
                </Route>
                <Route exact path="/product/ilia">
                    {renderProduct("Ilia")}
                </Route>
                <Route exact path="/product/glossier">
                    {renderProduct("Glossier")}
                </Route>
                <Route exact path="/product/concealer">
                    {renderProduct("Concealer")}
                </Route>
                <Route exact path="/product/lipcheek">
                    {renderProduct("Lip Cheek")}
                </Route>
                <Route exact path="/product/lipstick">
                    {renderProduct("Lipstick")}
                </Route>
                <Route exact path="/product/matte">
                    {renderProduct("Matte")}
                </Route>
            </Switch>
        </React.Fragment>
    )
}