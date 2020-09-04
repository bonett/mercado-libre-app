/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Detail, Reviews, Description } from './productDetail.styled';

const ProductDetailComponent = () => {
    return (
        <Detail>
            <Description>
                <img src="https://zoomcart.net/wp-content/uploads/2020/02/H7480c80cdc03498ca814137e62727df12.jpg" alt="zpaa" />
            </Description>
            <Reviews>
                as
            </Reviews>
        </Detail>
    );
};

ProductDetailComponent.propTypes = {};

export default ProductDetailComponent;
