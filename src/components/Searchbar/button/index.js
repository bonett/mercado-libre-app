/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { ButtonSearch, IconButton } from './button.styled';

const ButtonSearchComponent = () => {
    const search = require('../../../assets/img/ic_Search@2x.png.png.png');

    return (
        <ButtonSearch type="submit">
            <IconButton src={search} alt="search" />
        </ButtonSearch>
    );
};

ButtonSearchComponent.propTypes = {};

export default ButtonSearchComponent;
