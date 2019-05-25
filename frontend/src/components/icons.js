import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import '../stylesheets/icons.css'

const Icon = styled.div`
    background-color: #303435;
    height: 100%;
    padding-bottom: 30px;
    padding-left: 120px;
    padding-right: 70px;
    padding-top: 40px;
`

//icons
const rct = require('../images/react.png');
const java = require('../images/java.jpg');
const javascript = require('../images/javascript.png');
const node = require('../images/node.png');
const python = require('../images/python.jpg');
const sql = require('../images/sql1.png');
const html = require('../images/html.png');
const mongo = require('../images/mongodb.png');
const express = require('../images/express.png');
const cpp = require('../images/C++.png');
const angular = require('../images/angular.png');
const php = require('../images/php.png');
const swift = require('../images/swift.png');
const matlab = require('../images/matlab.png');
const csh = require('../images/csh.jpg');
const c = require('../images/c.png');
const delphi = require('../images/delphi.png');
const net = require('../images/net.jpg');



class Icons extends Component {
    render() {
        return (
            <Icon>
                <div>
                    <Fade top> <h1>NEWS & EVENTS</h1></Fade >
                </div>
                <div className='iconContainer'>
                    <Fade left>
                        {/* <div> */}
                        <img className='IconIcons' src={rct} alt="react" />
                        <img className='IconIcons' src={java} alt="react" />
                        <img className='IconIcons' src={javascript} alt="react" />
                        {/* </div> */}
                        {/* <div>/ */}
                    </Fade>
                    <Fade right>
                        <img className='IconIcons' src={rct} alt="react" />
                        <img className='IconIcons' src={java} alt="react" />
                        <img className='IconIcons' src={javascript} alt="react" />
                        {/* </div> */}
                        {/* <div> */}
                    </Fade>
                    <Fade left>
                        <img className='IconIcons' src={node} alt="react" />
                        <img className='IconIcons' src={python} alt="react" />
                        <img className='IconIcons' src={sql} alt="react" />
                        {/* </div> */}
                    </Fade>

                    {/* <div> */}<Fade right>
                        <img className='IconIcons' src={html} alt="react" />
                        <img className='IconIcons' src={mongo} alt="react" />
                        <img className='IconIcons' src={express} alt="react" />
                        {/* </div> */}
                    </Fade>

                    {/* <div> */}<Fade left>
                        <img className='IconIcons' src={angular} alt="angular" />
                        <img className='IconIcons' src={cpp} alt="react" />
                        <img className='IconIcons' src={php} alt="react" />
                        {/* </div> */}
                    </Fade>

                    {/* <div> */}<Fade right>
                        <img className='IconIcons' src={swift} alt="react" />
                        <img className='IconIcons' src={matlab} alt="react" />
                        <img className='IconIcons' src={csh} alt="react" />
                        {/* </div> */}
                    </Fade>

                    {/* <div> */}<Fade left>
                        <img className='IconIcons' src={c} alt="react" />
                        <img className='IconIcons' src={delphi} alt="react" />
                        <img className='IconIcons' src={net} alt="react" />
                        {/* </div> */}


                    </Fade>
                </div>
            </Icon>
        );
    }
}


export default Icons;