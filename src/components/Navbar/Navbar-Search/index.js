/* eslint-disable react/default-props-match-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import InputSearchComponent from './Input';

import './style.scss';

const SearchComponent = ({ handleInputSearch, handleSearchButton, searchValue }) => {
    return (
        <form action={`http://localhost:3000/items${searchValue}`} method="POST" role="search">
            <InputSearchComponent
                handleInputSearch={handleInputSearch}
                searchValue={searchValue}
                handleSearchButton={handleSearchButton}
            />
        </form>
    );
};

SearchComponent.propTypes = {
    handleInputSearch: PropTypes.func.isRequired,
    handleSearchButton: PropTypes.func.isRequired,
    searchValue: PropTypes.string
};

SearchComponent.defaultProps = {
    searchValue: ''
};

export default SearchComponent;
