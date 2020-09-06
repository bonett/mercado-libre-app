/* eslint-disable global-require */
import React from 'react';
import PropTypes, { string } from 'prop-types';

import './style.scss';

const BreadcrumbComponent = ({ categories }) => {
    return (
        <div className="container">
            <ul className="breadcrumb">
                {categories.map((category) => {
                    return <li className="breadcrumb_item" key={category}>{category}</li>;
                })}
                {/* <li className="breadcrumb_item">Electrónica Audio y Video</li>
                <li className="breadcrumb_item">Ipod</li>
                <li className="breadcrumb_item">Reproductores</li>
                <li className="breadcrumb_item">Ipod touch</li>
                <li className="breadcrumb_item">32gb</li> */}
            </ul>
        </div>
    );
};

BreadcrumbComponent.propTypes = {
    categories: PropTypes.arrayOf(string)
};

BreadcrumbComponent.defaultProps = {
    categories: []
};

export default BreadcrumbComponent;
