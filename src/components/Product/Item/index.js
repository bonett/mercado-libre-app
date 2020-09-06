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
                    src="https://zoomcart.net/wp-content/uploads/2020/02/H7480c80cdc03498ca814137e62727df12.jpg"
                    alt="Zapato"
                />
            </div>
            <div className="item__caption">
                <h3 className="item__caption_price">
                    $ 1.980
                    <span>
                        <img
                            src={shippingIcon}
                            alt="shiping_car"
                            className="icon-xs"
                        />
                    </span>
                </h3>
                <h2 className="item__caption_title">
                    {product.title}
                </h2>
                <h2 className="item__caption_reference">Completo Unico!</h2>
            </div>
            <div className="item__location">
                <h6 className="item__location_origin">Capital Federal</h6>
            </div>
        </article>
    );
};

ProductItemComponent.propTypes = {
    product: PropTypes.object.isRequired,
};

export default ProductItemComponent;
