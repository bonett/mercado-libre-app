/* eslint-disable global-require */
import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const LogoComponent = () => {
    const logo = require('../../../assets/img/Logo_ML@2x.png.png.png');
    return (
        <Link to="/" alt="Mercado Libre">
            <img
                src={logo}
                alt="Mercado Libre"
            />
        </Link>
    );
};

export default LogoComponent;
