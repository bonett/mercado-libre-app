/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const LogoComponent = ({ handleHomeClick }) => {
    const logo = require('../../../assets/img/Logo_ML@2x.png.png.png');
    return (
        <button type="button" alt="Mercado Libre" onClick={() => handleHomeClick()}>
            <img
                src={logo}
                alt="Mercado Libre"
            />
        </button>
    );
};

LogoComponent.propTypes = {
    handleHomeClick: PropTypes.func.isRequired
};

export default LogoComponent;
