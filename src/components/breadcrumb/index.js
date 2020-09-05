/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const BreadcrumbComponent = () => {
    return (
        <div className="container">
            <ul className="breadcrumb">
                <li className="breadcrumb_item">Electrónica Audio y Video</li>
                <li className="breadcrumb_item">Ipod</li>
                <li className="breadcrumb_item">Reproductores</li>
                <li className="breadcrumb_item">Ipod touch</li>
                <li className="breadcrumb_item">32gb</li>
            </ul>
        </div>
    );
};

BreadcrumbComponent.propTypes = {};

export default BreadcrumbComponent;
