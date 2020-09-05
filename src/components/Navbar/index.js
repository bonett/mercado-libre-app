/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import LogoComponent from './Navbar-Logo';
import SearchComponent from './Navbar-Search';

import './style.scss';

const NavbarComponent = ({ handleInputSearch, searchValue }) => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__content">
                    <div className="navbar__logo">
                        <LogoComponent />
                    </div>
                    <div className="navbar__form">
                        <SearchComponent
                            handleInputSearch={handleInputSearch}
                            searchValue={searchValue}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

NavbarComponent.propTypes = {
    handleInputSearch: PropTypes.func.isRequired
};

NavbarComponent.defaultProps = {
    searchValue: PropTypes.string
};

export default NavbarComponent;
