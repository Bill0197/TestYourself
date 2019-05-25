import React, { Component } from 'react'
import styled from 'styled-components'
import { Navbar } from 'styled-navbar-component/lib/components/Navbar';
import { Nav } from 'styled-nav-component'
import { NavbarLink } from 'styled-navbar-component/lib/components/NavbarLink'
import { Container } from 'styled-container-component';
import { Button } from 'styled-button-component';
import '../stylesheets/navbar.css'

const NavContainer = styled.nav`
.NavList{
    color:#f6db90;

}
`
const Input = styled.input`
/* display:flex; */
border: 2px solid #f6db90;
background: black;
border-radius: 7px;
height: 30px;
color: white;
align-items:center;
`

const Btn = styled.button`
/* display:flex; */
border: 2px solid #f6db90;
background: black;
border-radius: 7px;
height: 35px;
width: 100px;
color: #f6db90;
align-items:center;
cursor:pointer;
`


const brand = require('../images/logo-png.png')

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
            <NavContainer>
                <Container fluid>
                    <Navbar clasName='NavCon' expandLg dark>
                        <Nav >
                            <NavbarLink dark brand href="#"> <img className='brand' src={brand} alt="brand" /></NavbarLink>
                            <Button clasName='clb'
                                dark
                                outline
                                toggleCollapse
                                expandLg
                                onClick={() => this.handleOpenCloseNav()}
                            >
                                <span>&#9752;</span>
                            </Button>
                        </Nav>
                        <Nav expandLg clasName="NavContent" start collapse expandSm hidden={hidden} >
                            <div className='list'>
                                <NavbarLink className="NavList" dark href="#">Contacts</NavbarLink>
                                <NavbarLink className="NavList" dark href="#">About</NavbarLink>
                                <NavbarLink className="NavList" dark href="#">TestYourself</NavbarLink>
                                <NavbarLink className="NavList" dark href="#">News</NavbarLink>
                                <NavbarLink className="NavList" dark href="#">Coming Soon</NavbarLink>
                                <NavbarLink className="NavList" dark href="#">Partners</NavbarLink>
                                <NavbarLink className="NavList" dark href="#">Team</NavbarLink>
                                <NavbarLink className="NavList" dark href="/register">Register</NavbarLink>
                            </div>


                            <div className='left-item'>
                                <Input placeholder='search...' type="text" />
                                <Btn type='button'>Search</Btn>
                            </div>
                        </Nav>
                    </Navbar>
                </Container>
            </NavContainer>
        );
    }
}




export default NavigationBar;