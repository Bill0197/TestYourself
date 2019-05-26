import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'



const kr = require('../images/sejong.gif')
const uz = require("../images/nampi.png")

class Partners extends Component {
    render() {
        return (
            <MainPartner className="partners">
                <Fade bottom>
                    <h1>TestYourself Research Partners</h1>
                    <Univ className='univ'>
                        <div >
                            <img className="kr" src={kr} alt="Sejong University" />
                            <h1>Sejong University</h1>
                            <p>School of Engineering</p>
                            <p>In South Korea</p>
                        </div>
                        <div >
                            <img className="uz" src={uz} alt="Politexnika univ" />
                            <h1>Polythechnic University</h1>
                            <p>School of Information Security</p>
                            <p>In Uzbekistan</p>
                        </div>
                    </Univ>
                </Fade>

            </MainPartner>
        );
    }
}



const MainPartner = styled.div`
    background-color: #303435;
    height: 100%;
    text-align: center;
    padding-top: 40px;
    color: white;

    .uz{
    height: 25vh;
    width: 25vh;
    border-radius: 50%;
}

.kr{
    height: 25vh;
    width: 25vh;
    border-radius: 50%;
}

.univ{
    @media all and (max-width: 700px){
    display: block;
    padding: 5px;
   }
}



`;

const Univ = styled.div`
     display: flex;
     justify-content: center;
     justify-content: space-around;
     padding-top: 40px;
     padding-bottom: 40px;
`;




export default Partners;