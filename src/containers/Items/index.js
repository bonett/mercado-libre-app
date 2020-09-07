/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import BreadcrumbComponent from '../../components/Breadcrumb';
import ProductListComponent from '../../components/Product/List';
import SkeletonComponent from '../../components/Skeleton';
import { itemDetailSelected, fetchDataById } from '../../actions';

const ItemsContainer = ({
    history,
    categories,
    items,
    loading,
    getSelectedItem,
    fetchDataById
}) => {
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

    return (
        <React.Fragment>
            <section className="wrapper__breadcrumb">
                { items.length > 0 && (<BreadcrumbComponent categories={categories} />)}
            </section>
            <section>
                <section className="wrapper">
                    <div className="container">
                        <main className="wrapper__content">
                            {loading && <SkeletonComponent />}
                            {!loading && (
                                <React.Fragment>
                                    {items.length > 0 && (
                                        <ProductListComponent
                                            products={items}
                                            handleClickItem={handleClickItem}
                                        />
                                    )}
                                </React.Fragment>
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
        items: state.data.items,
        loading: state.data.loading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSelectedItem: (id) => dispatch(itemDetailSelected(id)),
        fetchDataById: (id) => dispatch(fetchDataById(id))
    };
};

ItemsContainer.propTypes = {
    categories: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(ItemsContainer));
