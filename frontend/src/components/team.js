import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'


///image of team members
const sardor = require('../images/sardor.jpg');
const dilshod = require('../images/dilshod.png')



class Team extends Component {
    render() {
        return (
            <MainTeam>
                <div className="containerTeam">
                    <div className="Teamcontainer1">
                        <Fade bottom>
                            <h1>TEAM MEMBERS</h1>
                            <p>After more than 4 years experience in web developing and  education,
                                our team invested in TestYourself technology since its inception
                       </p>
                            <p>
                                After pursuing years of experience in the web developing and education
                                field, we founded TestYourself make millions of people confident for their
                                advanced education.
                       </p>
                        </Fade>
                    </div>
                    <div className="Teamcontainer2">
                        <div className="row1">
                            <div>
                                <img className='sardor' src={sardor} alt="sardor" />
                                <h2 style={{ color: "#f6db90" }} >Sardorbek Mukhtorov</h2>
                                <h3>Co-Founder <span>&</span> CEO</h3>
                                <h3>Programmer</h3>
                                <p>Computer Science and Engineering BA, The Hacking School in India</p>
                                <p>Full-Stack Web Programmer <br /> Chief of TestYourself and UzHackers Coding Bootcamp</p>
                                <p>Function/Reactive/Clouding/Web Desin/UI/UX</p>
                            </div>
                            <hr />
                            <div>
                                <img className='dilshod' src={dilshod} alt="dilshod" />
                                <h2 style={{ color: "#f6db90" }} >Dilshodbek Mukhtorov</h2>
                                <h3> Co-Founder & Director</h3>
                                <h3>Instructor</h3>
                                <p>Information security BA, The Security System in Andijan</p>
                                <p>Mathimatics and Information securety <br /> Chief of TestYourself system</p>
                                <p>Functional/Reactve/Insturctor/Mathimatician</p>
                            </div>
                        </div>
                    </div>

                </div>
            </MainTeam>
        );
    }
}




const MainTeam = styled.div`
background-color: #555;
height: 100%;
color: white;
justify-items: center;
padding-top: 30px;
.containerTeam{
    align-items: center;
    align-content: center;
    justify-content:center;
    text-align: center;
    font-family: 'Arial Narrow Bold';
    
    
}
.Teamcontainer1 {
    padding-right: 50px;
    padding-left: 50px;
    margin-right: 50px;
    margin-left: 50px;
}
.Teamcontainer2{
    .row1{
        /* flex: 1; */
        display: flex;
        justify-content: space-around;
        p{
            color: #9BA7B0;
            font-size: .87em;
        }
    }
}


.sardor{
    height: 25vh;
    width: 25vh;
    border-radius: 50%;
}

.dilshod{
    height: 25vh;
    width: 25vh;
    border-radius: 50%;
}

.Teamcontainer2 > .row1{
    @media all and (max-width: 700px){
    display: block;
    padding: 5px;
   }
}


 `;

export default Team;