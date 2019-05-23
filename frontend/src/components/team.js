import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import '../stylesheets/team.css'

const MainTeam = styled.div`
background-color: #555;
height: 100%;
color: white;
justify-items: center;
.containerTeam{
    align-items: center;
    align-content: center;
    justify-content:center;
    text-align: center;
    
    
}
.Teamcontainer1 {
    padding: 50px;
    margin: 50px;
}
 `;
///image of team members
const sardor = require('../images/sardor.jpg');

class Team extends Component {
    render() {
        return (
            <MainTeam>
                <div className="containerTeam">
                    <div className="Teamcontainer1">
                        <h1>TEAM MEMBERS</h1>
                        <p>After more than 4 years experience in web developing and  education,
                            our team invested in TestYourself technology since its inception
                       </p>
                        <p>
                            After pursuing years of experience in the web developing and education
                            field, we founded TestYourself make millions of people confident for their
                            advanced education.
                       </p>
                    </div>
                    <div className="Teamcontainer2">
                        <div className="row1">
                            <img src={sardor} alt="sardor" />
                            <img src={sardor} alt="sardor" />
                        </div>
                        <div className="row2">
                            <h1>row2</h1>
                        </div>
                    </div>

                </div>
            </MainTeam>
        );
    }
}



export default Team;