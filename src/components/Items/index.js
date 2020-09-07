/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import PropTypes, { object } from 'prop-types';
import { Link } from 'react-router-dom';
import BreadcrumbComponent from '../Breadcrumb';
import ProductListComponent from '../Product/List';

const ItemsComponent = ({ products }) => {
    return (
        <React.Fragment>
            <section className="wrapper__breadcrumb">
                <BreadcrumbComponent />
            </section>
            <section>
                <section className="wrapper">
                    <div className="container">
                        <Link to={'items/123'}>Go toDetails</Link>
                        <main className="wrapper__content">
                            <ProductListComponent products={products} />
                        </main>
                    </div>
                </section>
            </section>
        </React.Fragment>
    );
};

ItemsComponent.propTypes = {
    products: PropTypes.arrayOf(object),
};

ItemsComponent.defaultProps = {
    products: [],
};

export default ItemsComponent;
