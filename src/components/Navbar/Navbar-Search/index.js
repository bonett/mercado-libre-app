/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import InputSearchComponent from './Input';

import './style.scss';

const SearchComponent = ({ handleInputSearch }) => {
    return (
        <form
            action=""
            method="GET"
            role="search"
            onChange={handleInputSearch}
        >
            <InputSearchComponent />
        </form>
    );
};

SearchComponent.propTypes = {
    handleInputSearch: PropTypes.func.isRequired
};

export default SearchComponent;
