import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NavbarComponent from '../../components/Navbar';
import { getSearchValue } from '../../actions';

const HomeContainer = ({ history, searching, getSearchValue }) => {
    const [search, setSearch] = useState('');

    const handleSearchButton = (e) => {
        e.preventDefault();
        getSearchValue(search);
        history.push(`/items?query=${search}`);
    };

    const handleInputSearch = (e) => {
        setSearch(e.target.value);
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
        getSearchValue: (search) => dispatch(getSearchValue(search))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(HomeContainer));
