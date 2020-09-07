/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ProductDetailComponent = ({ item }) => {
    return (
        <article className="detail">
            <section className="detail__media">
                <div className="detail__media__cover">
                    <img
                        className="detail__media__cover_image"
                        src={item.picture}
                        alt={item.title}
                    />
                </div>
                <div className="detail__media__description">
                    <h2 className="detail__media__description_heading">
                        Descripción del producto
                    </h2>
                    <p className="detail__media__description_paragraph">
                        {item.description}
                    </p>
                </div>
            </section>
            <aside className="detail__info">
                <h6 className="detail__info_shell">
                    {item.condition} - {item.sold_quantity} Vendidos
                </h6>
                <h3 className="detail__info_name">{item.title}</h3>
                <h4 className="detail__info_price">
                    $
                    {item.price.amount}
                </h4>
                <button className="detail__info_btn" type="button">
                    Comprar
                </button>
            </aside>
        </article>
    );
};

ProductDetailComponent.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        condition: PropTypes.string.isRequired,
        sold_quantity: PropTypes.number.isRequired,
        price: PropTypes.object.isRequired
    }).isRequired
};

export default ProductDetailComponent;
