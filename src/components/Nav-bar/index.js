import React from 'react';
import LogoComponent from '../Logo';
import SearchComponent from '../Search-bar';
import { Header, Navbar } from './navbar.styled';

const NavbarComponent = () => {
    return (
        <Header>
            <div className="container">
                <Navbar>
                    <div className="logo">
                        <LogoComponent />
                    </div>
                    <div className="form">
                        <SearchComponent />
                    </div>
                </Navbar>
            </div>
        </Header>
    );
};

export default NavbarComponent;
