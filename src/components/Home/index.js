import React from 'react';
import PropTypes from 'prop-types';
import NavbarComponent from '../Navbar';
import { withRouter } from 'react-router-dom';

const HomeComponent = ({
    handleInputSearch,
    handleSearchButton,
    searchValue,
    history,
}) => {
    console.log(searchValue, 'asasdas');
    return (
        <header>
            <NavbarComponent
                handleInputSearch={handleInputSearch}
                searchValue={searchValue}
                handleSearchButton={handleSearchButton}
            />
            <button
                type="button"
                onClick={() => history.push(`/items?query=${searchValue}`)}
            >
                Go to
            </button>
        </header>
    );
};

HomeComponent.propTypes = {
    handleInputSearch: PropTypes.func.isRequired,
    handleSearchButton: PropTypes.func.isRequired,
    searchValue: PropTypes.string
};

HomeComponent.defaultProps = {
    searchValue: ''
};

export default withRouter(HomeComponent);
