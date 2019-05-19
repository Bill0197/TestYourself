import React, { Component } from 'react'
import styled from 'styled-components'
import ReactDOM from 'react-dom';

const Title = styled.h2`
    font-size: 2.5em;
    text-align: center;
    color: red;

`
const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "red"};

  font-size: 1em;
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
                    Hello world
            </Title>
            <Button primary> Button</Button>
            <Button > Button</Button>
            </div>

        );
    }
}





export default Footer;