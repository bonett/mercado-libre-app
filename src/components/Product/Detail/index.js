/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ProductDetailComponent = () => {
    return (
        <article className="detail">
            <section className="detail__media">
                <div className="detail__media__cover">
                    <img className="detail__media__cover_image" src="https://http2.mlstatic.com/iphone-11-pro-256gb-sellado-para-entrega-inmediata-4g-D_NQ_NP_748414-MCO41595142018_042020-F.webp" alt="zpaa" />
                </div>
                <div className="detail__media__description">
                    <h2 className="detail__media__description_heading">Descripción del producto</h2>
                    <p className="detail__media__description_paragraph">
                        The Scarpe di Blanco Italian footwear collection was founded by Bill White in 2009. Di Bianco
                        offers classic handmade men's shoes with a modern twist. The combination of timeless
                        models and details with contemporary colors  and styling, results in decidedly current. yet.
                        elegant models. The aim of the Scarpe di Bianco company is to offer men a custom shoes
                        buying experience through a multitude od models, lasts, soles, leathers, and color options.
                    </p>
                </div>
            </section>
            <aside className="detail__info">
                <h6 className="detail__info_shell">Nuevo - 234 Vendidos</h6>
                <h3 className="detail__info_name">
                    Deco Reverse
                    <br />
                    {' '}
                    Sombrero Oxford
                </h3>
                <h4 className="detail__info_price">$ 1.980</h4>
                <button className="detail__info_btn" type="button">Comprar</button>
            </aside>
        </article>
    );
};

ProductDetailComponent.propTypes = {};

export default ProductDetailComponent;
