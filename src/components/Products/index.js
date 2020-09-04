/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { SectionCard, Article, Cover, Description, Location, Image } from './products.styled';

const ProductsComponent = () => {
    return (
        <SectionCard>
            <Article>
                <Cover>
                    <Image src="https://zoomcart.net/wp-content/uploads/2020/02/H7480c80cdc03498ca814137e62727df12.jpg" alt="Zapato" />
                </Cover>
                <Description>
                    s
                </Description>
                <Location>
                    <h5>Capital Federal</h5>
                </Location>
            </Article>
        </SectionCard>
    );
};

ProductsComponent.propTypes = {};

export default ProductsComponent;
