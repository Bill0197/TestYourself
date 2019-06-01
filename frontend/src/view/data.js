import React, { Component } from 'react'
import styled from 'styled-components'
import SideBar from '../components/sidebar'
import SideNav from '../components/sidenav'
import Team from '../components/team'

const img = require('../images/reg3.gif')

class Data extends Component {
    render() {
        return (
            <Main>
                <div className="container">
                    <div className="col1">
                        {/* <SideBar /> */}
                        {/* <SideNav /> */}
                        <h1>STAFF</h1> <hr />
                        <a href="/register/users">All user info</a>
                        <a href="/register/searchID">Search by ID</a>
                        <a href="/register/searchName">Search by name</a>
                        <a href="/register/team">Team members</a>
                        <a href="#"> Have a issue?</a>
                    </div>
                    <div className="col2">
                        {/* <Team /> */}
                        <h1>fasdfa</h1>
                        <h1>sfdjasdfjal</h1>
                        <h1>skfjksdfajsdlk</h1>

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
    }{
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
export default Data;