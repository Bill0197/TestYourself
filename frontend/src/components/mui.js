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

const MainM = styled.div`
        /* padding:100px; */
        background-color: #303435;
        height:100vh;
        .mtitle{
            color:white;
        }
`

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


export default Mui;