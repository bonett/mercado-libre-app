import React from 'react';
import BreadcrumbComponent from '../../components/Breadcrumb';
import ProductDetailComponent from '../../components/Product/Detail';

const DetailsContainer = () => {
    return (
        <React.Fragment>
            <section className="wrapper__breadcrumb">
                <BreadcrumbComponent />
            </section>
            <section>
                <section className="wrapper">
                    <div className="container">
                        <main className="wrapper__content">
                            <ProductDetailComponent />
                        </main>
                    </div>
                </section>
            </section>
        </React.Fragment>
    );
};

export default DetailsContainer;
