import React from 'react';
import LogoComponent from './Navbar-Logo';
import SearchComponent from './Navbar-Search';

import './style.scss';

const NavbarComponent = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__content">
                    <div className="navbar__logo">
                        <LogoComponent />
                    </div>
                    <div className="navbar__form">
                        <SearchComponent />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;
