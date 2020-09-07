/* eslint-disable react/forbid-prop-types */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import BreadcrumbComponent from '../../components/Breadcrumb';
import ProductDetailComponent from '../../components/Product/Detail';

const DetailsContainer = ({ history, itemDetail, categories }) => {
    useEffect(() => {
        if (itemDetail === null && categories === []) {
            history.push('/');
        }
    }, []);
    return (
        <React.Fragment>
            <section className="wrapper__breadcrumb">
                {categories && <BreadcrumbComponent categories={categories} />}
            </section>
            <section>
                <section className="wrapper">
                    <div className="container">
                        <main className="wrapper__content">
                            {itemDetail && (
                                <ProductDetailComponent item={itemDetail} />
                            )}
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

DetailsContainer.propTypes = {
    categories: PropTypes.any,
    itemDetail: PropTypes.any
};

DetailsContainer.defaultProps = {
    categories: [],
    itemDetail: ''
};

export default connect(mapStateToProps, '')(withRouter(DetailsContainer));
