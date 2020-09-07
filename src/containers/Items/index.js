/* eslint-disable react/jsx-curly-brace-presence */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import BreadcrumbComponent from '../../components/Breadcrumb';
import ProductListComponent from '../../components/Product/List';
import SkeletonComponent from '../../components/Skeleton';
import { fetchDataByName } from '../../actions';

const ItemsContainer = ({
    searching,
    fetchDataByName,
    categories,
    items,
    loading,
}) => {
    const fetchingData = () => {
        if (searching !== '') {
            fetchDataByName(searching);
        }
    };

    useEffect(() => {
        fetchingData();
    }, []);

    return (
        <React.Fragment>
            <section className="wrapper__breadcrumb">
                <BreadcrumbComponent categories={categories} />
            </section>
            <section>
                <section className="wrapper">
                    <div className="container">
                        <Link to={'items/123'}>Go toDetails</Link>
                        <main className="wrapper__content">
                            {loading && <SkeletonComponent />}
                            {!loading && (
                                <ProductListComponent products={items} />
                            )}
                            <SkeletonComponent />
                        </main>
                    </div>
                </section>
            </section>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        searching: state.data.searching,
        categories: state.data.categories,
        items: state.data.items,
        loading: state.data.loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDataByName: (search) => dispatch(fetchDataByName(search)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsContainer);
