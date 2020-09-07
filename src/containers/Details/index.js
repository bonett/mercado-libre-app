import React from 'react';
import { connect } from 'react-redux';
import BreadcrumbComponent from '../../components/Breadcrumb';
import ProductDetailComponent from '../../components/Product/Detail';

const DetailsContainer = ({ itemDetail, categories }) => {
    return (
        <React.Fragment>
            <section className="wrapper__breadcrumb">
                <BreadcrumbComponent categories={categories} />
            </section>
            <section>
                <section className="wrapper">
                    <div className="container">
                        <main className="wrapper__content">
                            <ProductDetailComponent item={itemDetail} />
                        </main>
                    </div>
                </section>
            </section>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        categories: state.data.categories,
        itemDetail: state.data.itemDetail
    };
};

export default connect(mapStateToProps, '')(DetailsContainer);
