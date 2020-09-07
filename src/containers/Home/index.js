/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import NavbarComponent from '../../components/Navbar';
import {
    getSearchValue,
    fetchDataByName
} from '../../actions';

const HomeContainer = ({
    history,
    searching,
    getSearchValue,
    fetchDataByName
}) => {
    const dispatchEvents = () => {
        getSearchValue(searching);
        fetchDataByName(searching);
    };

    const handleSearchButton = (e) => {
        e.preventDefault();
        if (searching !== '') {
            dispatchEvents();
            setTimeout(() => {
                history.push(`/items?query=${searching}`);
            }, 300);
        } else {
            alert('Por favor, ingrese un producto ...');
        }
    };

    const handleInputSearch = (e) => {
        getSearchValue(e.target.value);
    };

    return (
        <header>
            <NavbarComponent
                handleInputSearch={handleInputSearch}
                searchValue={searching}
                handleSearchButton={handleSearchButton}
            />
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        searching: state.data.searching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSearchValue: (searching) => dispatch(getSearchValue(searching)),
        fetchDataByName: (searching) => dispatch(fetchDataByName(searching))
    };
};

HomeContainer.propTypes = {
    searching: PropTypes.string.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(HomeContainer));
