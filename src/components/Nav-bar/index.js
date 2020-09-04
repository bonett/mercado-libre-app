import React from 'react';
import { Header, Navbar } from './navbar.styled';
import LogoComponent from '../Logo';
import SearchComponent from '../Search-bar';

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
