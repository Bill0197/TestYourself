import React, { Component } from "react"
import styled from 'styled-components'
import axios from 'axios';
var cors = require('cors');
const img = require('../images/reg3.gif')


const Users = props => (
    <tr>
        <td>{props.user.name}</td>
        <td>{props.user.surname}</td>
        <td>{props.user.email}</td>
        <td>{props.user._id}</td>
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
                        {/* <SideBar /> */}
                        {/* <SideNav /> */}
                        <h1>STAFF</h1> <hr />
                        <a href="/data/allusers">All user info</a>
                        <a href="/data/searchID">Search by ID</a>
                        <a href="/data/searchName">Search by name</a>
                        <a href="/data/team">Team members</a>
                        <a href="data/issue"> Have a issue?</a>
                    </div>
                    <div className="col2">


                        <h1>User Information</h1>
                        <table>
                            <thead>

                                <tr>
                                    <th>Name</th>
                                    <th>Surname</th>
                                    <th>Email</th>
                                    <th>ID</th>
                                </tr>
                            </thead>
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
    background-image: url(${img});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    z-index: -10;    
    display: flex;
    color: white;
    overflow: hidden;
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
`

export default Allusers;