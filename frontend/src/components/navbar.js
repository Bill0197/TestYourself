import React from 'react';
import styled from 'styled-components'
import { HashRouter } from 'react-router-dom'
import { Router, Route } from 'react-router'

/*
  if you installed `styled-bootstrap-components` use
 
    import { ... } from 'styled-bootstrap-components'
 
  instead.
*/
// import { Container } from 'styled-container-component';
// import { Button } from 'styled-button-component';
import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';

const Button = styled.button`
`
const Container = styled.div`
    position:fixed;
    position: absolute;
`


class NavbarLight extends React.Component {
    constructor(props) {
        super();
        this.state = {
            hidden: true,
        };
    }

    handleOpenCloseNav() {
        this.setState({
            hidden: !this.state.hidden,
        });
    }

    render() {
        const { hidden } = this.state;
        return (
            <Container fluid className='fix-nav'>
                <Container fluid>
                    <Navbar expandSm >
                        <Nav start>
                            <NavbarLink light brand href="#">BRAND</NavbarLink>
                            <Button
                                light
                                outline
                                toggleCollapse
                                expandSm
                                onClick={() => this.handleOpenCloseNav()}
                            >
                                <span>&#9776;</span>
                            </Button>
                        </Nav>
                        <Nav start collapse expandSm hidden={hidden}>
                            <HashRouter light active basename="/sardor/">Active</HashRouter>
                            <NavbarLink light href="#">Link</NavbarLink>
                            <NavbarLink light href="register">register</NavbarLink>
                            <NavbarLink light disabled href="#">Disabled</NavbarLink>
                        </Nav>
                    </Navbar>
                </Container>
            </Container>
        );
    }
};

export default NavbarLight;