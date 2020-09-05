/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import ProductItemComponent from '../Item';

const ProductListComponent = () => {
    return (
        <React.Fragment>
            <ProductItemComponent />
            <ProductItemComponent />
            <ProductItemComponent />
            <ProductItemComponent />
        </React.Fragment>
    );
};

ProductListComponent.propTypes = {};

export default ProductListComponent;
