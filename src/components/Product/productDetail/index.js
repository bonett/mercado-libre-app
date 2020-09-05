/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { ProductDetail, ProductInfo, ProductImage, TitleDescription, TextDescription, ProductDescription, ProductPreview, ProductReview, Product, ProductName, ProductPrice, BuyButton } from './productDetail.styled';

const ProductDetailComponent = () => {
    return (
        <Product>
            <ProductInfo>
                <ProductPreview>
                    <ProductImage src="https://http2.mlstatic.com/iphone-11-pro-256gb-sellado-para-entrega-inmediata-4g-D_NQ_NP_748414-MCO41595142018_042020-F.webp" alt="zpaa" />
                    <ProductDescription>
                        <TitleDescription>Descripción del producto</TitleDescription>
                        <TextDescription>The Scarpe di Blanco Italian footwear collection was founded by Bill White in 2009. Di Bianco
                            offers classic handmade men's shoes with a modern twist. The combination of timeless
                            models and details with contemporary colors  and styling, results in decidedly current. yet.
                            elegant models. The aim of the Scarpe di Bianco company is to offer men a custom shoes
                            buying experience through a multitude od models, lasts, soles, leathers, and color options.
                        </TextDescription>
                    </ProductDescription>
                </ProductPreview>
                <ProductDetail>
                    <ProductReview>Nuevo - 234 Vendidos</ProductReview>
                    <ProductName>Deco Reverse <br/> Sombrero Oxford</ProductName>
                    <ProductPrice>$ 1.980</ProductPrice>
                    <BuyButton type="button">Comprar</BuyButton>
                </ProductDetail>
            </ProductInfo>
        </Product>
    );
};

ProductDetailComponent.propTypes = {};

export default ProductDetailComponent;
