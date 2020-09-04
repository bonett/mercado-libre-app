/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { SectionCard } from './products.styled';
import ProductItemComponent from './productItem';
import ProductDetailComponent from './productDetail';

const ProductsComponent = () => {
    return (
        <>
            <SectionCard>
                <ProductDetailComponent />
            </SectionCard>
            {/* <SectionCard>
                <ProductItemComponent />
                <ProductItemComponent />
                <ProductItemComponent />
                <ProductItemComponent />
            </SectionCard> */}
        </>
    );
};

ProductsComponent.propTypes = {};

export default ProductsComponent;
