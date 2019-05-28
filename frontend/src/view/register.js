import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import Create from '../components/create';
import Edit from '../components/edit';
import Index from '../components/index';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const img = require('../images/reg3.gif')

class RegisterPage extends Component {
    constructor(porps) {
        super();
        this.state = {
            name: '',
            surname: '',
            eml: '',
            school: '',
            password: '',
            image: ''
        };
        this.nameChange = this.nameChange.bind(this);
        this.surnameChange = this.surnameChange.bind(this)
        this.schoolChange = this.schoolChange.bind(this)
        this.emailchange = this.emailchange.bind(this)
        this.passwordChange = this.passwordChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this);
    }



    nameChange(event) {
        this.setState({
            name: event.target.value
        });
    }

    img(event) {
        this.setState({
            image: event.target.value
        });
    }
    emailchange(event) {
        this.setState({
            eml: event.target.value
        });
    }

    passwordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    surnameChange(event) {
        this.setState({
            surname: event.target.value
        });
    }

    schoolChange(event) {
        this.setState({
            school: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        console.log('form submitted')
        console.log(`name is ${this.state.name}`)
        console.log(`surname is ${this.state.surname}`)
        console.log(`school name is ${this.state.school}`)
        console.log(`email:  ${this.state.eml}`)
        console.log(`password${this.state.password}`)
        console.log(`confirmation ${this.state.image}`);
        this.setState({
            name: '',
            surname: '',
            eml: '',
            school: '',
            password: '',
            image: '',
            confirm: ''
        })
    }
    componentDidMount(){
        fetch('/register')
        .then(res => res.json())
        .then(users => this.setState({users}));
    }
    
        render() {
        return (
            <Wrapper>
                <div className="container">
                    {/* < div box><div class="content-box">Content box</div> </div> */}
                    <form className="FormCon" action="/register" method='POST' onSubmit={this.onSubmit}>
                        <div className="list">
                            <input value={this.state.name} onChange={this.nameChange} placeholder="First name" type="text" name='name' />
                            <input value={this.state.surname} onChange={this.surnameChange} placeholder="Second name" type="text" name='surname' />
                            <input value={this.state.email} onChange={this.emailChange} placeholder="example@gmail.com" type="email" name='eml' />
                            <input value={this.state.school} onChange={this.schoolChange} placeholder="School name" type="text" name='school' />
                            <input value={this.state.password} onChange={this.passwordChange} placeholder="Enter new password" type="password" name='password' />
                            <input name='confirm' placeholder="Confirm password" type="password" />
                            <input value={this.state.img} onChange={this.imgChange} type="file" name='image' />
                            <button className="btn" type='submit'> Submit</button>
                        </div>
                    </form>
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

 
    .list{
        /* display:flex; */
        padding: 100px;
    }

    input{
        display: flex;
        padding: 0.5em;
        margin: 0.5em;
        background: papayawhip;
        border: none;
        border-radius: 5px;
        width: 187px;

    }

    
    button{
        display: flex;
        padding: 0.5em;
        margin: 0.5em;
        background: papayawhip;
        border: none;
        border-radius: 5px;
        font-size: 17px;
        width: 197px;
        text-align: center;
        color: midnightblue;
        cursor: pointer;
    }
    .btn{
        text-align: center;
        justify-content: center;
    }
    .imgfile{
        cursor: pointer;
    }

    .room{
        width: 400px;
        height: 400px;
        background-color: red;
        color: red;
    }
    .box{
        padding: 50px;
        right: 50px;
        left: 50px;
    }

    /* .content-box{
        color: white;
        width: 100px;
        height: 100px;
        right: 40px;
        left: 50px;
        /* margin: 50px; */
        background-color: white;
    } */

`


export default RegisterPage;