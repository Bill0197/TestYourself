import React, { Component } from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';
import Zoom from 'react-reveal/Zoom'
import Flip from 'react-reveal/Flip'
import LightSpeed from 'react-reveal/LightSpeed'
import HeadShake from 'react-reveal/HeadShake'
import Bounce from 'react-reveal/Bounce'
import Jello from 'react-reveal/Jello'



const mlogo = require('../images/token_value.png')
class Mui extends Component {
    render() {
        return (
            <MainM className='ContainerM'>
                <Bounce>
                    <div className="mtitle">
                        <h1>UzHackers - Preserving the Value</h1>
                        <h3>UzHackers is the native stable token designed to be value-proof
                            over time and to power the TestYourself testing system.
                    </h3>
                    </div>
                    <div className="mtitle2">
                        <div className="col1">
                            <img className='mlogo' src={mlogo} alt="mlogo" />
                        </div>
                        <div className="col2">
                            <ul>
                                <li>Suitable as a store of value, a medium of exchange, and unit of account</li> <br />
                                <li>Value-proof protected by the Algorithmic Central Bank and the Sovereign Treasury</li> <br />
                                <li>Guards against price volatility with Algorithmic Central Bank</li><br />
                                <li>Will be the master coin of MUI Meta-blockchain node</li> <br />
                                <li>Profits will be accumulated by the M.DEX and Meta-Blockchain Exchange Bank Service</li> <br />
                            </ul>
                        </div>
                    </div>
                </Bounce>
            </MainM>
        );
    }
}


const MainM = styled.div`
        background-color: #303435;
        height:100%;
        padding-right: 200px;
        padding-left: 200px;
        padding-top:100px;
        padding-bottom: 100px;
        .mtitle{
            color:white;
        }


.mtitle2{
    display: flex;
    padding-top: 50px;
    justify-content: space-around;
}

.mlogo{
    width: 70vh;
    height: 70vh;
}

ul{
    color: #f6db90;
}
.col1{
    flex-grow: 3;
}
.col2{
    padding-left: 50px;
    padding-top:50px;
}
.mtitle{
    justify-content: center;
    text-align: center;
}

@media all and (max-width: 1400px){
    .ContainerM{
        padding-left: 230px;
        padding-right: 230px;
    }
    .col2{
        padding-left: 10px;
    }
    .mlogo{
        width: 60vh;
        height: 60vh;
    }
}



@media all and (max-width: 1200px){
    .ContainerM{
        padding-left: 170px;
        padding-right: 170px;
    }
    .col2{
        padding-left: 10px;
        padding-top: 10px;
    }
    .mlogo{
        width: 60vh;
        height: 65vh;
    }
}


@media all and (max-width: 1100px){
    .ContainerM{
        padding-left: 120px;
        padding-right: 120px;
    }
    .col2{
        padding-left: 10px;
        padding-top: 10px;
    }
    .mlogo{
        width: 60vh;
        height: 65vh;
    }
}

@media all and (max-width: 1000px){

        padding-left: 50px;
        padding-right: 50px;

    .col2{
        padding-left: 10px;
        padding-top: 10px;
    }
    .mlogo{
        width: 50vh;
        height: 65vh;
    }
}

/* 3 */
@media all and (max-width: 900px){
        padding-right: 40px;
        padding-left: 40px;
    .col2{
        padding-left: 2px;
        padding-top: 2px;
    }
    .mtitle2{
        justify-content: center;
    }
    .ContainerM{
        padding-left: 5px;
        padding-right: 5px;
    }

    .mtitle2{
        display: flex;
    }
}


/* 2 */
@media all and (max-width: 800px){
        padding-right: 10px;
        padding-left: 10px;
    .col2{
        padding-left: 2px;
        padding-top: 2px;
    }
    .mtitle2{
        justify-content: center;
    }
    .ContainerM{
        padding-left: 5px;
        padding-right: 5px;
    }

    .mtitle2{
        display: flex;
    }
}

/* 1 */
@media all and (max-width: 667px){
    padding:15px;
    justify-content: center;
    justify-items: center;
    .mtitle2{
        justify-content: center;
    }
    .ContainerM{
        padding-left: 5px;
        padding-right: 5px;
    }

    .mtitle2{
        display: block;
    }
}
`


export default Mui;