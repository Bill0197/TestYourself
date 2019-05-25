import React, { Component } from 'react';
import styled from 'styled-components';
import '../stylesheets/mui.css';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
import Zoom from 'react-reveal/Zoom'
import Flip from 'react-reveal/Flip'
import LightSpeed from 'react-reveal/LightSpeed'
import HeadShake from 'react-reveal/HeadShake'
import Bounce from 'react-reveal/Bounce'
import Jello from 'react-reveal/Jello'


const MainWhy = styled.div`
    background-color:white;
    color: #70808d;
    .col2{
        display: flex;
        justify-content: space-around;
    }
    
`

class Why extends Component {
    render() {
        return (
            <MainWhy>
                <div className="col1">col1</div>
                <div className="col2">
                    <div className="row1">row1</div>
                    <div className="row2">row2</div>
                    <div className="row3">row3</div>
                </div>
                <div className="col3">col3</div>

            </MainWhy>
        );
    }
}










export default Why;