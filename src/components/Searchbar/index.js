/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import InputSearchComponent from './Input';
import ButtonSearchComponent from './button';
import { SearchBar } from './searchbar.styled';

const SearchComponent = () => {
    return (
        <SearchBar
            action=""
            method="GET"
            role="search"
        >
            <React.Fragment>
                <InputSearchComponent />
            </React.Fragment>
            <React.Fragment>
                <ButtonSearchComponent />
            </React.Fragment>
        </SearchBar>
    );
};

SearchComponent.propTypes = {};

export default SearchComponent;
