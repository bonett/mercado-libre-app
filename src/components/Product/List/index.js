/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import ProductItemComponent from '../Item';

const ProductListComponent = () => {
    return (
        <>
            <ProductItemComponent />
            <ProductItemComponent />
        </>
    );
};

ProductListComponent.propTypes = {};

export default ProductListComponent;
