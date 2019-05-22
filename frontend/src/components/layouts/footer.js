import React, { Component } from 'react'
import styled from 'styled-components'
import { AppStoreIos } from 'styled-icons/fa-brands/AppStoreIos'
import { PlayStore } from 'styled-icons/boxicons-logos/PlayStore'

import { Facebook } from 'styled-icons/fa-brands/Facebook'
import { Github } from "styled-icons/fa-brands/Github"
import { Twitter } from 'styled-icons/fa-brands/Twitter'
import { Telegram } from 'styled-icons/fa-brands/Telegram'
import { Youtube } from 'styled-icons/fa-brands/Youtube'
import { Linkedin } from 'styled-icons/fa-brands/Linkedin'
import '../../stylesheets/footer.css'


const Container = styled.div`
    

`

// four div
const ContElement = styled.div`
background: black;
height: 500px;
color: white;
justify-content: center;
display: flex;
justify-content: space-around;


.txt{
    font-size: 1.3em;
}
`

const logo = require('../../images/logo-png.png');

const Button = styled.button`
display:flex;
border: 2px solid white;
background: black;
border-radius: 10px;
justify-content: center;
color: white;
align-items:center;
cursor:pointer;
`
const Download = styled.div`
display: flex;
justify-content: flex-start ;
color: white;
justify-content: center;

`
const Apple = styled(AppStoreIos)`
height: 3em;
width: 50px;
color: white;
`;
const Play = styled(PlayStore)`
height: 3em;
width: 50px;
color: white;
justify-content: flex-end;
`;

const Fb = styled(Facebook)`
color: white;
margin-right: 5px;
height: 20px;
width: 30px;
`

const Tg = styled(Telegram)`
color: white;
margin-right: 5px;
height: 20px;
width: 30px;
`

const Git = styled(Github)`
color: white;
margin-right: 5px;
height: 20px;
width: 30px;
`

const Tw = styled(Twitter)`
color: white;
margin-right: 5px;
height: 20px;
width: 30px;
`

const Yt = styled(Youtube)`
color: white;
margin-right: 5px;
height: 20px;
width: 30px;
`

const In = styled(Linkedin)`
color: white;
margin-right: 5px;
height: 20px;
width: 30px;
`

class Footer extends Component {
    render() {
        return (
            <Container className='container'>
                <ContElement className="element">
                    <div className="container1">
                        <img className="logo" src={logo} alt="logo-png" /> <br /> <br />
                        <section className='txt'>
                            Test Your Knowladge <br />Change The World
                            <br /> <br />
                            <Download>
                                <Button > <Apple /><span>Apple Store</span></Button>
                                <Button> <Play />Google Play </Button>
                            </Download>

                        </section>
                    </div>
                    <div className="container2">
                        <br /> <br /> <br /> <br />
                        Uzbekistan(TASH) <br />
                        Hayat Regency Road <br />
                        Tashkent 160900 <br /> <br />
                        +8210 8427 4044
                        <br /><br />
                        TestYourself. <br />
                        Seoul, South Korea. <br />
                        Sejong University <br />
                        DataBase blow mind <br />
                        Web Programming classes <br />

                    </div>
                    <div className="container3">
                        <br /> <br /> <br /> <br />
                        Connect
                        <br /> <br />
                        {/* social links */}

                        {/* Facebook */}
                        <div style={{ display: "flex" }}>
                            <br /> <Fb className="socialLink" />
                            <span>Facebook</span>
                        </div>
                        {/* Telegram */}
                        <div style={{ display: "flex" }}>
                            <br />  <Tg className="socialLink" />
                            <span>Telegram</span>
                        </div>
                        {/* GitHub */}
                        <div style={{ display: "flex", color: "white" }}>
                            <br />  <Git className="socialLink" />
                            <span>GitHub</span>
                        </div>

                        {/* Twitter */}
                        <div style={{ display: "flex" }}>
                            <br />  <Tw className="socialLink" />
                            <span>Twitter</span>
                        </div>

                        {/* youtube */}
                        <div style={{ display: "flex" }}>
                            <br />  <Yt className="socialLink" />
                            <span>Youtube</span>
                        </div>
                        {/* Linkedin */}
                        <div style={{ display: "flex" }}>
                            <br />  <In className="socialLink" />
                            <span>Linkedin</span>
                        </div>

                    </div>
                    <div className="container4">Container4</div>
                </ContElement>
            </Container>

        );
    }
}





export default Footer;