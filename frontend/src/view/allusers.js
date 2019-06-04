import React, { Component } from "react"
import styled from 'styled-components'
import axios from 'axios';
var cors = require('cors');
const img = require('../images/reg3.gif')


const Users = props => (
    <tr className="userinfo">
        <div className="avatar">
            <td className="">image</td>
        </div>
        <div className="usercontent1">

            <div className="username">
                <th>Name:</th>
                <td>{props.user.name}</td>
            </div>
            <div className="usersurname">
                <th>Surname:</th>
                <td>{props.user.surname}</td>
            </div>
            <div className="userschool">
                <th>School:</th>
                <td>{props.user.school}</td>
            </div>
        </div>
        <div className="usercontent2">

            <div className="useremail">
                <th>Email:</th>
                <td>{props.user.email}</td>
            </div>
            <div className="user">
                <th>ID:</th>
                <td>{props.user._id}</td>
            </div>
            <div>
                <th>Score</th>
                <td>{props.user.score}</td>
            </div>
        </div>
        <br />
    </tr>
)
class Allusers extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: true,
            users: [],
            error: null
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:3000/data/allusers/', { headers: { "Content-Type": "application/json" } })
            // .then(res => res.json)
            .then(res => {
                console.log(res.data)
                this.setState({
                    users: res.data
                })
                console.log(res)
            })
            .catch(error => {
                console.log(error);
            })
    }

    usersList() {
        return this.state.users.map(function (currentUser, i) {
            return <Users user={currentUser} key />
        })
    }

    render() {
        return (
            <Main>

                <div className="container">
                    <div className="col1">
                        <a href="/data"> <h1>STAFF</h1></a> <hr />
                        <a href="/data/allusers">All user info</a>
                        <a href="/data/searchID">Search by ID</a>
                        <a href="/data/searchName">Search by name</a>
                        <a href="/data/team">Team members</a>
                        <a href="data/issue"> Have a issue?</a>
                    </div>
                    <div className="col2">
                        <h1>User Information</h1>
                        <table>
                            <tbody>
                                {this.usersList()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Main>
        );
    }
}

const Main = styled.div`
    .col2{

    }
    /* background-image: url(${img}); */
    background-size: cover;
    background-position: center center;
    /* background-repeat: no-repeat; */
    top: 0;
    bottom: 0;
    width: 100%;
    /* height: 100vh; */
    z-index: -10;    
    display: flex;
    color: black;
    /* overflow: hidden; */
    .container{
        display: grid;
        text-align: center;
        grid-template-columns: 200px auto;
        grid-template-rows: 100% 100%;
    }
    .col1{
        background: #f6db90;
        color: black;
        position: -webkit-sticky;
        position: sticky;
        position: fixed;
        height: 100vh
    }
    a{
        /* justify-content: center; */
        /* style: none; */
        padding-left: 40px;
        padding-right: 50px;
        padding-bottom: 10px;
        color: black;
        text-align: center;
        display: flex;
        font-family: bold;
    }
    .userinfo{
        display: flex;
        margin-bottom: 5px;
        padding-left: 200px;

    }
    .avatar{
        width: 70px;
        height: 90px;
        border: 2px solid black;
    }
`

export default Allusers;