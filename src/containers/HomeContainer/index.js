import React from 'react';
import ProductListComponent from '../../components/Product/ProductList';

const HomeContainer = () => {
    return (
        <section className="wrapper">
            <div className="container">
                <main className="wrapper__content">
                    <ProductListComponent />
                </main>
            </div>
        </section>
    );
};

export default HomeContainer;
