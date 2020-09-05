/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import InputSearchComponent from './Input';

import './style.scss';

const SearchComponent = ({ handleInputSearch, searchValue }) => {
    return (
        <form
            action=""
            method="GET"
            role="search"
        >
            <InputSearchComponent handleInputSearch={handleInputSearch} searchValue={searchValue} />
        </form>
    );
};

SearchComponent.propTypes = {
    handleInputSearch: PropTypes.func.isRequired
};

SearchComponent.defaultProps = {
    searchValue: PropTypes.string
};

export default SearchComponent;
