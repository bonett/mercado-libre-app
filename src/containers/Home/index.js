import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import NavbarComponent from '../../components/Navbar';

const HomeContainer = ({ history }) => {
    const [data, setData] = useState({
        response: null,
        searchValue: ''
    });

    const handleSearchButton = (e) => {
        e.preventDefault();
        history.push(`/items?query=${data.searchValue}`);
    };

    const handleInputSearch = (e) => {
        setData({ searchValue: e.target.value });
    };

    return (
        <header>
            <NavbarComponent
                handleInputSearch={handleInputSearch}
                searchValue={data.searchValue}
                handleSearchButton={handleSearchButton}
            />
        </header>
    );
};

export default withRouter(HomeContainer);
