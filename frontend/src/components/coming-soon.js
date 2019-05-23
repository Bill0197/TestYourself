import React, { Component } from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import '../stylesheets/coming-soon.css'


///main
const Main = styled.div`
    background-color: #fff;
    color: #70808d;
    background-repeat: no-repeat;
    background-position: 50%;
    justify-items:center;
    text-align:center;
    justify-content: center;
    font-size: 20px;

    .coming1{
        text-align:center;
        justify-content: center;

    }

    .coming2{
        display: flex;
        flex: 1;
        justify-content: space-around;
        justify-items: center;
        .comingColumn1 > .comingColumn2 > .comingColumn3{
            /* flex: 1; */
            /* padding: 20px; */
        }
    }
`
///images
const logo1 = require('../images/coming1.png');
const logo2 = require('../images/coming2.png');
const logo3 = require('../images/coming3.png');

class ComingSoon extends Component {
    render() {
        return (
            <Main className='containerComing'>
                <div className="coming1">
                    <Fade bottom>
                    <h1>COMING SOON</h1>
                    <p>
                        Launching the TestYourself app in is the first phase <br />
                        in world wide education that prepare the students for AI world. <br />
                        We are already working on on the second phase.
                    </p>
                    </Fade>
                </div>
                <div className="coming2">
                    <div className="comingColumn1">
                        <Fade bottom>
                        <img src={logo1} alt="logo1" />
                        <h2>Exchange Interconnectivity</h2>
                        <p>Partnering with the world’s top decentralized
                            exchanges will deliver scalability, interoperability
                            and sustainability.</p>
                        </Fade>
                    </div>
                    <div className="comingSoon2">
                        <Fade bottom>
                        <img src={logo2} alt="logo2" />
                        <h2>MUI Material-UI</h2>
                        <p>Implementing Material-UI in the AI industry to make the
                            world better than before. Start, Learn, Launch.
                        
                    </p>
                    </Fade>
                    </div>
                    <div className="comingColumn2">
                        <Fade bottom>
                        <img src={logo3} alt="logo3" />
                        <h2>Decentralized Exchange</h2>
                        <p>Purchase a wide range of cryptocurrencies on
                             our own decentralized exchange.</p>
                        </Fade>
                    </div>

                </div>
            </Main>
        );
    }
}

export default ComingSoon;