import React, { Component } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import '../../stylesheets/header.css'
import Responsive from 'react-responsive-background';

import { AppStoreIos } from 'styled-icons/fa-brands/AppStoreIos'
import { PlayStore } from 'styled-icons/boxicons-logos/PlayStore'

// main body decloration
const Main = styled.div`
    color: white;
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-around;
    align-content: center;
    background-repeat: no-repeat;

    .container2{
        .phoneIcon{
            /* height: 10%; */
        }
        
    }
`

// download button decloration
const Download = styled.div`
display: flex;
justify-content: flex-start ;
color: white;
justify-content: center;
`
// buttons
const Button = styled.button`
display:flex;
border: 2px solid #f6db90;
background: black;
border-radius: 10px;
color: white;
align-items:center;
cursor:pointer;
`
// apple icon
const Apple = styled(AppStoreIos)`
height: 3em;
width: 50px;
color: white;
`
//google icon
const Play = styled(PlayStore)`
height: 3em;
width: 50px;
color: white;
justify-content: flex-end;
`;

const Content = styled.div`
text-align:center;
font-size: 15px;
padding: 5px;
`

/// phone icon
const phoneIcon = require('../../images/phone-logo.png');


class Header extends Component {
    render() {
        return (
            <Main className='container'>
                <Fade bottom>
                    <div className="container1">
                        <Content>
                            <Fade bottom> <h1> Ready to Create Your Futere? </h1> </Fade>
                            <Fade bottom> <h2> Then Test Yourself.</h2> </Fade>
                            <Fade bottom><h1> UzHacking School</h1> </Fade>
                        </Content>

                        <Download>
                            <Fade bottom>
                                <Button > <Apple /><span>Apple Store</span></Button>
                                <Button> <Play />Google Play </Button>
                            </Fade>
                        </Download> <br /> <br /> <br />
                    </div>
                    <div className="container2">
                        <img className='phoneIcon' src={phoneIcon} alt="phone icon" />
                    </div>
                </Fade>
            </Main>
        );
    }

}



export default Header;