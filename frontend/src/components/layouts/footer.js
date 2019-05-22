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
import { Instagram } from 'styled-icons/fa-brands/Instagram'
import '../../stylesheets/footer.css'


const Container = styled.div`
    

`

// four div
const ContElement = styled.div`
background: black;
height: 80%;
color: white;
justify-content: center;
display: flex;
justify-content: space-around;


.txt{
    font-size: 1.3em;
}
`
// image logo
const logo = require('../../images/logo-png.png');

///  SocilaLinkWrapper
const SocilaLinkWrapper = styled.div`
    color: #f6db90;
    font-size: 1.1em;
    justify-items: center;


    a{
        color: #f6db90;
        padding: 5px;
    }
`

// buttons
const Button = styled.button`
display:flex;
border: 2px solid #f6db90;
background: black;
border-radius: 10px;
justify-content: center;
color: white;
align-items:center;
cursor:pointer;
`

// download button decloration
const Download = styled.div`
display: flex;
justify-content: flex-start ;
color: white;
justify-content: center;
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

//facebook icon
const Fb = styled(Facebook)`
color: #f6db90;
margin-right: 5px;
height: 20px;
width: 30px;
padding: 5px;

`

const Tg = styled(Telegram)`
color: #f6db90;
margin-right: 5px;
height: 20px;
width: 30px;
padding: 5px;

`
//git icon
const Git = styled(Github)`
color: #f6db90;
margin-right: 5px;
height: 20px;
width: 30px;
padding: 5px;
`

//twitter icon
const Tw = styled(Twitter)`
color: #f6db90;
margin-right: 5px;
height: 20px;
width: 30px;
padding: 5px;

`

const Yt = styled(Youtube)`
color: #f6db90;
margin-right: 5px;
height: 20px;
width: 30px;
padding: 5px;

`
//Linkedin icon
const In = styled(Linkedin)`
margin-right: 5px;
height: 20px;
width: 30px;
padding: 5px;

`
//Instagram icon
const Ig = styled(Instagram)`
margin-right: 5px;
height: 20px;
width: 30px;
padding: 5px;

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
                            </Download> <br /> <br /> <br />

                            <a style={{ color: "#f6db90" }} href="mailto:sardor.sejong@gmail.com">sardor.sejong@gmail.com</a>

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
                        <b>Contact</b>
                        <br /> <br />
                        {/* social links */}
                        <SocilaLinkWrapper>
                            {/* Facebook */}
                            <div style={{ display: "flex" }}>
                                <br /> <Fb className="socialLink" />
                                <span> <a href="http://facebook.com/profile.php?id=100004454506696"> Facebook </a></span>
                            </div>
                            {/* Telegram */}
                            <div style={{ display: "flex" }}>
                                <br />  <Tg className="socialLink" />
                                <span> <a href="http://t.me/smd_94">Telegram</a> </span>
                            </div>
                            {/* GitHub */}
                            <div style={{ display: "flex" }}>
                                <br />   <Git className="socialLink" />
                                <span><a href="https://github.com/mukhtorov"> GitHub </a></span>
                            </div>

                            {/* Twitter */}
                            <div style={{ display: "flex" }}>
                                <br />  <Tw className="socialLink" />
                                <span > <a href="http://twitte.com/smd_94">Twitter </a></span>
                            </div>

                            {/* youtube */}
                            <div style={{ display: "flex" }}>
                                <br />   <Yt className="socialLink" />
                                <span><a href="https://www.youtube.com/channel/UCIIcraLARkWo9wc5c699vzA?view_as=subscriber"> Youtube </a></span>
                            </div>
                            {/* Linkedin */}
                            <div style={{ display: "flex" }}>
                                <br />   <In className="socialLink" />
                                <span><a href="http://linkedin.com/in/smd94"> Linkedin </a></span>
                            </div>
                            {/* Instagram */}
                            <div style={{ display: "flex" }}>
                                <br />  <Ig className="socialLink" />
                                <span> <a href="http://instagram.com/smd_94"> Instagram </a></span>
                            </div>
                        </SocilaLinkWrapper>
                    </div>
                    <div className="container4">
                        <br /> <br /> <br /> <br />
                        <b>want to know more?</b>
                        <br /> <br /> <br /> <br />

                        <span>
                            Create Your Future <br />
                            Your future is on your hand <br />
                            We are the solution!
                        </span>
                    </div>
                </ContElement>
            </Container>

        );
    }
}





export default Footer;