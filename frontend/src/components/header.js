import React, { Component } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import { AppStoreIos } from 'styled-icons/fa-brands/AppStoreIos'
import { PlayStore } from 'styled-icons/boxicons-logos/PlayStore'


//background image
import img from '../images/main-body.png';
/// phone icon
const phoneIcon = require('../images/phone-logo.png');

///started from here
class Header extends Component {
    render() {
        return (
            <Wrapper>
                <Main className='Maincontainer'>
                    <Fade bottom>
                        <div className="container1">
                            <Content>
                                <h1> Ready to Create Your Futere? </h1>
                                {/* <h2> Then Test Yourself.</h2> */}
                                <h1>TestYourSelf</h1>
                                <h1> UzHacking School</h1>
                            </Content>
                            <Download className='download'>
                                <Button className='Apple' > <Apple /><span>Apple Store</span></Button>
                                <Button className='Play'> <Play />Google Play </Button>
                            </Download> <br /> <br /> <br />
                        </div>
                        <div className="container2">
                            <img className='phoneIcon' src={phoneIcon} alt="phone icon" />
                        </div>
                    </Fade>
                </Main>
            </Wrapper>
        );
    }

}



///styled-components
///contemt
const Content = styled.div`
    text-align:center;
    font-size: 10px;
    padding: 5px;
`;
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
    `;
// download button decloration
const Download = styled.div`
    display: flex;
    justify-content: space-around ;
    color: white;
    justify-content: center;
    `
// main body decloration
const Main = styled.div`
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-content: center;

     
`;
// buttons
const Button = styled.button`
    display:flex;
    justify-content: space-around;
    border: 2px solid #f6db90;
    background: black;
    border-radius: 10px;
    color: white;
    align-items:center;
    cursor:pointer;
`;




///wrapper
const Wrapper = styled.div`
.Maincontainer{
    background-image: url(${img});   
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    z-index: -10;
    

}
.phoneIcon{
    height: 80vh;
    padding-right: 40px;
}


@media all and (max-width: 900px){
    .phoneIcon{
        height: 60vh;
    }
    .content{
        font-size: 10px;
    }
 
}

@media all and (max-width: 700px){
    .phoneIcon{
        height: 35vh;
        width: 25vh;
        padding-left: 2px;
        padding-right: 5px;
    }
    .container1{
        padding-left:5px;
    }
    .content{
        padding: 5px; 
        font-size: 5px;
    }
    .Apple{
    height: 3em;
    width: 90%;
 }
     .Play{
    height: 3em;
    width: 80%;
     }
     .download{
         display:column;
     }
}
`







export default Header;