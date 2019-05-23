import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
// import '../images/icons.css'

const Icon = styled.div`
    background-color: #303435;
    height: 100%;
`

//icons
const rct = require('../images/react.png')


class Icons extends Component {
    render() {
        return (
            <Icon>
                <div>
                    <h1>NEWS & EVENTS</h1>
                </div>
                <div >
                    <img className='IconIcons' src={rct} alt="react" />
                </div>
            </Icon>
        );
    }
}


export default Icons;