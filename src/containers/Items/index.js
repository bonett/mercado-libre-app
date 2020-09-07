/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-curly-brace-presence */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import BreadcrumbComponent from '../../components/Breadcrumb';
import ProductListComponent from '../../components/Product/List';
import SkeletonComponent from '../../components/Skeleton';
import { fetchDataByName, itemDetailSelected, fetchDataById } from '../../actions';

const ItemsContainer = ({
    history,
    searching,
    fetchDataByName,
    categories,
    items,
    loading,
    getSelectedItem,
    fetchDataById
}) => {
    const fetchingData = () => {
        fetchDataByName(searching);
    };

    const dispatchEvents = (id) => {
        getSelectedItem(id);
        fetchDataById(id);
    };

    const handleClickItem = (item) => {
        const { id } = item;
        dispatchEvents(id);
        setTimeout(() => {
            history.push(`/items/${id}`);
        }, 500);
    };

    useEffect(() => {
        fetchingData();
    }, [searching]);

    return (
        <React.Fragment>
            <section className="wrapper__breadcrumb">
                <BreadcrumbComponent categories={categories} />
            </section>
            <section>
                <section className="wrapper">
                    <div className="container">
                        <main className="wrapper__content">
                            {loading && <SkeletonComponent />}
                            {!loading && (
                                <ProductListComponent
                                    products={items}
                                    handleClickItem={handleClickItem}
                                />
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
        searching: state.data.searching,
        categories: state.data.categories,
        items: state.data.items,
        loading: state.data.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchDataByName: (search) => dispatch(fetchDataByName(search)),
        getSelectedItem: (id) => dispatch(itemDetailSelected(id)),
        fetchDataById: (id) => dispatch(fetchDataById(id))
    };
};

ItemsContainer.propTypes = {
    searching: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(ItemsContainer));
