/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ProductItemComponent = ({ product }) => {
    const shippingIcon = require('../../../assets/img/ic_shipping@2x.png.png.png');
    return (
        <article className="item">
            <div className="item__thumbnail">
                <img
                    className="item__thumbnail_image"
                    src={product.picture}
                    alt={product.title}
                />
            </div>
            <div className="item__caption">
                <h3 className="item__caption_price">
                    <React.Fragment>
                        <span className="currency">$</span>
                        {product.price.amount}
                    </React.Fragment>
                    <React.Fragment>
                        {product.free_shipping && (
                            <span>
                                <img
                                    src={shippingIcon}
                                    alt="shiping_car"
                                    className="icon-xs"
                                />
                            </span>
                        )}
                    </React.Fragment>
                </h3>
                <h2 className="item__caption_title">{product.title}</h2>
                <h2 className="item__caption_reference">{product.condition}</h2>
            </div>
            <div className="item__location">
                <h6 className="item__location_origin">{product.address}</h6>
            </div>
        </article>
    );
};

ProductItemComponent.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        condition: PropTypes.string.isRequired,
        free_shipping: PropTypes.bool.isRequired,
        price: PropTypes.object.isRequired,
        address: PropTypes.string.isRequired
    }).isRequired
};

export default ProductItemComponent;
