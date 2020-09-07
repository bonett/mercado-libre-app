/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import PropTypes, { object } from 'prop-types';
import { Link } from 'react-router-dom';
import BreadcrumbComponent from '../../components/Breadcrumb';
import ProductListComponent from '../../components/Product/List';
import SkeletonComponent from '../../components/Skeleton';

const ItemsContainer = ({ products }) => {
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
                            {/* <ProductListComponent products={products} /> */}
                            <SkeletonComponent />
                        </main>
                    </div>
                </section>
            </section>
        </React.Fragment>
    );
};

ItemsContainer.propTypes = {
    products: PropTypes.arrayOf(object),
};

ItemsContainer.defaultProps = {
    products: [],
};

export default ItemsContainer;
