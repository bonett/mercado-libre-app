/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import LogoComponent from './Navbar-Logo';
import SearchComponent from './Navbar-Search';

import './style.scss';

const NavbarComponent = ({ handleInputSearch, handleSearchButton, searchValue, handleHomeClick }) => {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__content">
                    <div className="navbar__logo">
                        <LogoComponent handleHomeClick={handleHomeClick} />
                    </div>
                    <div className="navbar__form">
                        <SearchComponent
                            handleInputSearch={handleInputSearch}
                            searchValue={searchValue}
                            handleSearchButton={handleSearchButton}
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
};

NavbarComponent.propTypes = {
    handleInputSearch: PropTypes.func.isRequired,
    handleSearchButton: PropTypes.func.isRequired,
    handleHomeClick: PropTypes.func.isRequired,
    searchValue: PropTypes.string
};

NavbarComponent.defaultProps = {
    searchValue: ''
};

export default NavbarComponent;
