/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { InputSearch } from './input-search.styled';

const InputSearchComponent = () => {
    return (
        <InputSearch
            type="text"
            placeholder="Nunca dejes de buscar"
            maxLength="120"
            autoComplete="off"
        />
    );
};

InputSearchComponent.propTypes = {};

export default InputSearchComponent;
