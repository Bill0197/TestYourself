import React, { Component } from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom';

const Title = styled.h4`
    // font-size: 2.5em;
    text-align: center;
    color: red;
    display: flex;
    margin-right: 5px;
    border: 2px solid palevioletred;


`
const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "black"};

//   font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  
`;

class Footer extends Component {
    render() {
        return (
            <div>
                <Title>
                    <div><h1>Sardorbek </h1> </div>
                    <div><h1>Sardorbek </h1> </div>
                    <div><h1>Sardorbek </h1> </div>
                </Title>
                <Button primary> Button</Button>
                <Button > Button</Button>
            </div>

        );
    }
}





export default Footer;