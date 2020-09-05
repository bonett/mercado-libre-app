/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import InputSearchComponent from './Input';

import './style.scss';

const SearchComponent = () => {
    return (
        <form
            action=""
            method="GET"
            role="search"
        >
            <InputSearchComponent />
        </form>
    );
};

SearchComponent.propTypes = {};

export default SearchComponent;
