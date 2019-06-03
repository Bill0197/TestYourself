import React, { Component } from 'react'
import styled from 'styled-components'
import { Router, Route, browserHistory } from 'react-router'

// import SideBar from '../components/sidebar'
// import SideNav from '../components/sidenav'
import Team from '../components/team'
import Allusers from './allusers'

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
                        <a href="/data/allusers">All user info</a>
                        <a href="/data/searchID">Search by ID</a>
                        <a href="/data/searchName">Search by name</a>
                        <a href="/data/team">Team members</a>
                        <a href="data/issue"> Have a issue?</a>
                    </div>
                    <div className="col2">
                        <Team />
                        <Allusers />
                        {/* <Router history={browserHistory}>
                            <Route path={"/data/team"} component={Team} />
                        </Router> */}
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
export default Data;