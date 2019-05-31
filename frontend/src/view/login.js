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
                    <div className="row1">

                        <div className="con1">
                            <h1>sardor</h1>
                        </div>

                    </div>
                </div>
            </Wrapper>
        );
    }
}


const Wrapper = styled.div`
        margin: 0px;
        padding: 0px
   
    .container{
        background-image: url(${img});
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        width: 100%;
        height: 100vh;
        z-index: -10; 
        color: white;
        grid-template-columns: 100px ;
        grid-template-rows: 50px;
        grid-gap: 3px;
    .row{

        /* margin-top: 40px; */
    }
    }
    .con1{
        background: blue;
    }

    .con2{
        background: blue;
    }
`;


export default RegisterPage;