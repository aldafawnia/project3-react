import React from 'react'
import { CartFill } from 'react-bootstrap-icons';
import axios from 'axios'

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import '../styles/LandingPage.css';

import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import LandingNav from './LandingNav';
import ProductCategory from './ProductCategory'

export default class LandingPage extends React.Component{

    render(){
        return(
            <React.Fragment>
                <Navbar>
                    <Navbar.Brand className="mr-5">
                      <img
                         src="../seduire_logo.png"
                         width="250"
                         height="80"
                         className="d-inline-block align-top"
                         alt="Seduire Logo"
                       />
                    </Navbar.Brand>
                    <div id="product-bar">
                     <Button onClick={this.cartPopOut} variant="white">
                      <CartFill style={{color:"black", width:"40px", height:"40px"}}/>
                     </Button>
                    </div>
                </Navbar>
                <div id="product-menu">
                    <div class="btn-bar">
                    <div style={{backgroundColor:"grey"}}>
                       <LandingNav/>
                    </div>
                    </div>
                </div>
                <div class="container">
                    <div id="product-container">
                       <ProductCategory/>
                    </div>
                <div>

                </div>
                </div>
            </React.Fragment>
        )
    }
}