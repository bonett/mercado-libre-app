import React from 'react';
import BreadcrumbComponent from '../../components/Breadcrumb';
import ProductsComponent from '../../components/Products';

const HomeContainer = () => {
    return (
        <section>
            <div className="container">
                <section>
                    <BreadcrumbComponent />
                </section>
                <main>
                    <ProductsComponent />
                </main>
            </div>
        </section>
    );
};

export default HomeContainer;
