import React from 'react'
import { CartFill } from 'react-bootstrap-icons';
import axios from 'axios'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// import '../styles/MenuPage.css';

import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import LandingNav from './LandingNav';
import ProductCategory from './ProductCategory'

export default class LandingPage extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Navbar bg="danger">
                    <Navbar.Brand className="mr-5">
                      <img
                         src="./images/burger_shop_logo.png"
                         width="90"
                         height="80"
                         className="d-inline-block align-top"
                         alt="The Burger Shop Logo"
                       />
                    </Navbar.Brand>
                    <div id="menu-bar">
                     <Button onClick={this.cartPopOut} variant="danger">
                      <CartFill style={{color:"white", width:"40px", height:"40px"}}/>
                     </Button>
                    </div>
                </Navbar>
                <div id="main-menu">
                    <div style={{width:"20%", backgroundColor:"#ffc107"}}>
                       <LandingNav/>
                    </div>
                    <div id="menu-container">
                       <ProductCategory/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}