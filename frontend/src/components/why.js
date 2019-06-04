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


class Why extends Component {
    render() {
        return (
            <MainWhy className='MainWhy'>
                <Fade bottom>
                    <div className="ycol1">
                        <h1>WHY NOW?</h1>
                        <h3 className='yh3'>After four years of development, TestYourself technology has been advancing
                            through the 1st and 2nd generation, that still have unsolved issues.
                            UzHackers Coding School is developing our system based in the 3.0 generation
                            of the TestYourself, the latest advancements in this technology, where we
                        adding AI courses in the near future.</h3>
                    </div>
                    <div className="ycol2">
                        <div className="yrow1">
                            <h2>TestYourSelf 1.0</h2>
                            <p> <span >&#10004; </span>  Security issues</p>
                            <p> <span >&#10004;</span> Slow action speed</p>
                            <p> <span >&#10008;</span> Registration </p>
                            <p> <span >&#10008;</span> DataBase Connection </p>
                            <p><span>&#10008;</span> Programming courses</p>
                            <p><span>&#10008;</span>  Math Courses</p>
                            <p><span>&#10008;</span>  Searching Informaiton</p>
                            <p><span>&#10008;</span>  Displaying Informaiton</p>
                            <p><span>&#10008;</span> Ranking users</p>

                        </div>
                        <div className="yrow2">
                            <h2>TestYourSelf 2.0</h2>
                            <p> <span >&#10004; </span>  Security issues</p>
                            <p> <span >&#10004;</span> Slow action fixed</p>
                            <p> <span >&#10004;</span> Registration </p>
                            <p> <span >&#10004;</span> DataBase Connection </p>
                            <p><span>&#10004;</span>  Math Courses</p>
                            <p><span>&#10004;</span>  Displaying Informaiton</p>
                            <p><span>&#10004;</span>  Searching Informaiton</p>
                            <p><span>&#10008;</span> Programming courses</p>
                            <p><span>&#10008;</span> Ranking users</p>
                        </div>
                        <div className="yrow3">
                            <h2>TestYourSelf 3.0</h2>
                            <p> <span>&#10004; </span>  Security issues</p>
                            <p> <span>&#10004;</span> Slow action fixed</p>
                            <p> <span >&#10004;</span> Registration </p>
                            <p> <span >&#10004;</span> DataBase Connection </p>
                            <p><span>&#10004;</span> Programming courses</p>
                            <p><span>&#10004;</span>  Math Courses</p>
                            <p><span>&#10004;</span>  Searching Informaiton</p>
                            <p><span>&#10004;</span>  Displaying Informaiton</p>
                            <p><span>&#10004;</span> Ranking users</p>
                        </div>

                    </div>
                </Fade>
            </MainWhy>
        );
    }
}


const MainWhy = styled.div`
    background-color:white;
    color: #70808d;
    text-align: center;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 150px;
    padding-right: 150px;
    span{
        color: #f6db90;
    }

    p{
       text-align: start;
    }

    h1{
        color:black;
    }

    .ycol2{
        display: flex;
        justify-content: space-around;
    }
    @media all and (max-width: 768px){
        padding-left: 10px;
        padding-right: 10px;
        .ycol2{
            display: block;
            p{
                padding-left:50px;
                text-align: start;
            }
        }
    }
`









export default Why;