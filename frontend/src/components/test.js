import React, { Component } from "react"
import Sidenav from './sidebar'
import styled from 'styled-components'
import Team from './team'
import Footer from './footer'
import { Router, Link, browserHistory } from 'react-router'
import Route from 'react-router-dom/Route'


class Test extends Component {
    render() {
        return (
            <Main>
                <Router history={browserHistory}>
                    <div className="container">
                        <div className="col1">
                            <Link to="/test"> <h1>STAFF</h1></Link> <hr />
                            <Link to="/test/allusers">All user info</Link>
                            <Link to="/data/searchID">Search by ID</Link>
                            <Link to="/data/searchName">Search by name</Link>
                            <Link to="/data/team">Team members</Link>
                            <Link to="data/issue"> Have a issue?</Link>
                        </div>
                        <Route path={'test/allusers'} render={
                            () => {
                                return (
                                    <h1>Sardor</h1>
                                );
                            }
                        } />
                    </div>
                </Router>
            </Main >
        );
    }
}


const Main = styled.div`
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
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
                color: black;
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
        `


export default Test;