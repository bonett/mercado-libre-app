import React from 'react';
import BreadcrumbComponent from '../../components/Breadcrumb';
import ProductsComponent from '../../components/Products';

const HomeContainer = () => {
    return (
        <React.Fragment>
            <div className="container">
                <section>
                    <BreadcrumbComponent />
                </section>
                <main>
                    <ProductsComponent />
                </main>
            </div>
        </React.Fragment>
    );
};

export default HomeContainer;
