/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Logo } from './logo.styled';

const LogoComponent = () => {
    const logo = require('../../assets/img/Logo_ML@2x.png.png.png');
    return (
        <React.Fragment>
            <a href="/" alt="Mercado Libre">
                <Logo
                    src={logo}
                    alt="Mercado Libre"
                />
            </a>
        </React.Fragment>
    );
};

LogoComponent.propTypes = {};

export default LogoComponent;
