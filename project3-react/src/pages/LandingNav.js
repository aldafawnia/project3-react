import React, {useState, useEffect} from 'react'
import axios from 'axios'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
} from "react-router-dom";

import Button from 'react-bootstrap/Button';

export default function LandingNav(){

    const [categories, setCategories] = useState([]);

    const history = useHistory();

    useEffect(() => {
        fetchApi();
    },[])

    async function fetchApi(){
        let response = await axios.get('https://8080-ce658780-baa8-4628-bf51-6d14254b95b4.ws-us03.gitpod.io/api/categories')
        setCategories(response.data)
    }

    function changeRoute(categoryTitle){
        let newCategoryTitle = ""
        if(categoryTitle.includes(' ')){
            let index = categoryTitle.indexOf(' ')
            let firstString = categoryTitle.slice(0, index)
            let secondString = categoryTitle.slice(index+1)
            newCategoryTitle = (firstString.concat(secondString)).toLowerCase()
        }
        else{
            if(categoryTitle === "Ilia"){
                newCategoryTitle = ""
            }
            else{
                newCategoryTitle = categoryTitle.toLowerCase()
            }
        }
        history.push(`/product/${newCategoryTitle}`)
    }

    function renderCategories(){
        let jsx = []
        for(let category of categories){
            jsx.push(
                <React.Fragment>
                    <Button style={{fontSize:"24px",color:"white", backgroundColor:"grey", border:'none'}} onClick={() => changeRoute(category.category_name)}>{category.category_name}</Button>
                </React.Fragment>
            )
        }
        return jsx;
    }

    return(
        <React.Fragment>
            {renderCategories()}
            <Button onClick={()=>history.push('/register')}>Register</Button>
        </React.Fragment>
    )
}