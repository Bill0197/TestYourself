import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import Create from '../components/create';
import Edit from '../components/edit';
import Index from '../components/index';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const img = require('../images/reg3.gif')

class RegisterPage extends Component {
    render() {
        return (
            <Wrapper>
                <div className="container">
                    <div className="con1">
                        <h1>sardor</h1>
                    </div>
                    <div className="con2">
                        <h2>dilshdo</h2>
                    </div>
                </div>
            </Wrapper>
        );
    }
}


const Wrapper = styled.div`
    background-image: url(${img});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    z-index: -10;    
    .container{
        color: white;
        display: grid;
        grid-template-columns: 100px ;
        grid-template-rows: 50px;
        grid-gap: 3px;
    }
    .con1{
        background-color: white;
        margin: 100px;
    }

    .con2{
        background-color: red;
        margin: 100px;
    }
`;


export default RegisterPage;