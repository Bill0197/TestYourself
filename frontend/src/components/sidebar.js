import React from 'react';
import styled from 'styled-components'
import { slide as Menu } from 'react-burger-menu';

export default props => {
    return (
        <Main>
            <Menu>
                <div className='container'>

                    <a className="menu-item" href="/">
                        All Users
                </a>

                    <a className="menu-item" href="/laravel">
                        Instructors
                </a>

                    <a className="menu-item" href="/angular">
                        Search by ID
                </a>

                    <a className="menu-item" href="/react">
                        Search by Name
                </a>

                    <a className="menu-item" href="/vue">
                        Ranking
                </a>
                </div>
            </Menu >
        </Main>
    );
};


const Main = styled.div`

    .container{
        margin-top: 100px;

    }

    a{
        display: flex;
        color: #f6db90;
        width: 100%;
        padding-bottom: 30px;
    }
`;