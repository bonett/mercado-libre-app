import React from 'react';
import PropTypes from 'prop-types';
import LogoComponent from './Navbar-Logo';
import SearchComponent from './Navbar-Search';

import './style.scss';

const NavbarComponent = ({ handleInputSearch }) => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__content">
                    <div className="navbar__logo">
                        <LogoComponent />
                    </div>
                    <div className="navbar__form">
                        <SearchComponent handleInputSearch={handleInputSearch} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

NavbarComponent.propTypes = {
    handleInputSearch: PropTypes.func.isRequired
};

export default NavbarComponent;
