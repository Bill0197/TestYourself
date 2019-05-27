import React, { Component } from 'react'
import styled from 'styled-components'

const img = require('../images/reg3.gif')


class RegisterPage extends Component {
    render() {
        return (
            <Wrapper>
                <div className="container">
                    <form className="FormCon" action="">
                        <div className="list">
                            <input required placeholder="First name" type="text" />
                            <input src placeholder="Second name" type="text" />
                            <input placeholder="example@gmail.com" type="email" />
                            <input placeholder="School name" type="text" />
                            <input placeholder="Enter new password" type="password" />
                            <input placeholder="Confirm password" type="password" />
                            <input className='file' type="file" class="addfiles" title="image" />
                            <button className="submitbutton" type='submit'> Submit</button>
                        </div>
                    </form>
                </div>
            </Wrapper>
        );
    }
}


const Wrapper = styled.div`
    background-image: url(${img});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    z-index: -10;    

 
    .list{
        /* display:flex; */
        padding: 100px;
    }

    input{
        display: flex;
        padding: 0.5em;
        margin: 0.5em;
        background: papayawhip;
        border: none;
        border-radius: 5px;
        width: 187px;
        text-align: center;

    }

    
    button{
        display: flex;
        padding: 0.5em;
        margin: 0.5em;
        background: papayawhip;
        border: none;
        border-radius: 5px;
        font-size: 17px;
        text-align: center;
        margin-left: 60px;
        color: midnightblue;

    }


`


export default RegisterPage;