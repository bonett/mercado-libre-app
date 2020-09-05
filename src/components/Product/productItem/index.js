/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const ProductItemComponent = () => {
    return (
        <article>
            <div>
                <img src="https://zoomcart.net/wp-content/uploads/2020/02/H7480c80cdc03498ca814137e62727df12.jpg" alt="Zapato" />
            </div>
            <div>
                <h3>
                    $ 1.980
                </h3>
                <h2>
                    Apple Ipod touch 5g 16gb Negro Igual A Nuevo
                </h2>
                <h2>
                    Completo Unico!
                </h2>
            </div>
            <div>
                <h6>Capital Federal</h6>
            </div>
        </article>
    );
};

ProductItemComponent.propTypes = {};

export default ProductItemComponent;
