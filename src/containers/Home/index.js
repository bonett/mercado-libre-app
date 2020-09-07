import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import NavbarComponent from '../../components/Navbar';
import { getSearchValue } from '../../actions';

const HomeContainer = ({ history, searching, getSearchValue }) => {
    const handleSearchButton = (e) => {
        e.preventDefault();
        getSearchValue(searching);
        history.push(`/items?query=${searching}`);
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
        getSearchValue: (searching) => dispatch(getSearchValue(searching))
    };
};

HomeContainer.propTypes = {
    searching: PropTypes.string.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(HomeContainer));
