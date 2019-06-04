import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import Avatar from 'react-avatar-edit';
import { Redirect, browserHistory } from 'react-router'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const img = require('../images/reg3.gif')

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            answer: '',
            redirectToReferrer: true
        };
        this.titleChange = this.titleChange.bind(this);
        this.contentChange = this.contentChange.bind(this);
        this.answerChange = this.answerChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }



    titleChange(event) {
        this.setState({
            title: event.target.value
        });
    }

    answerChange(event) {
        this.setState({
            answer: event.target.value.toUpperCase()
        });
    }


    contentChange(event) {

        this.setState({
            content: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();
        console.log('form submitted')
        console.log(`title is ${this.state.title}`)
        console.log(`content is ${this.state.content}`)
        console.log(`answer is ${this.state.answer}`)

        const user = {
            title: this.state.tite,
            content: this.state.content,
            answer: this.state.answer,
            redirectToReferrer: true
        }
        axios
            .post("/math", user)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    render() {
        return (
            <Wrapper>
                <div className="container">
                    <form className="FormCon" action="/register" method='POST' onSubmit={this.onSubmit}>
                        <div className="list">
                            <input value={this.state.title} onChange={this.titleChange} placeholder="Title" type="text" name='title' />
                            <textarea value={this.state.content} onChange={this.contentChange} placeholder="Enter content" type="area" name='content' />
                            <input maxLength={1}  value={this.state.answer} onChange={this.answerChange} placeholder="Correct answer(A,B,C,D)" type="string" name='answer' />
                            <button className="btn" type='submit'> Submit</button>
                        </div >

                    </form >
                </div >
            </Wrapper >
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

     .content-box{/*
        color: white;
        width: 100px;
        height: 100px;
        right: 40px;
        left: 50px;
        /* margin: 50px; */
        background-color: white;
    } 
    textarea{
        display: flex;
        padding: 0.5em;
        margin: 0.5em;
        background: papayawhip;
        border: none;
        border-radius: 5px;
        width: 187px;

    }

`


export default RegisterPage;