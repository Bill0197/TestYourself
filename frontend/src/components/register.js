import React, { Component } from 'react'
import styled from 'styled-components'
import { Navbar } from 'styled-navbar-component/lib/components/Navbar';
import { Nav } from 'styled-nav-component'
import { NavbarLink } from 'styled-navbar-component/lib/components/NavbarLink'
import { Container } from 'styled-container-component';
import { Button } from 'styled-button-component';

const NavContainer = styled.nav`
li{
    /* display: flex; */
    display: inline;
    justify-items: space-around;
}
`

class NavigationBar extends Component {
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
            <Container fluid>
                <Container fluid>
                    <Navbar expandSm light>
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
                            <NavbarLink light active href="#">Active</NavbarLink>
                            <NavbarLink light href="#">Link</NavbarLink>
                            <NavbarLink light href="#">Link</NavbarLink>
                            <NavbarLink light disabled href="#">Disabled</NavbarLink>
                        </Nav>
                    </Navbar>
                </Container>
            </Container>
        );
    }
}




export default NavigationBar;