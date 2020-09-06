import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import NavbarComponent from '../components/Navbar';
import BreadcrumbComponent from '../components/Breadcrumb';
import ProductListComponent from '../components/Product/List';
import ProductDetailComponent from '../components/Product/Detail';
import SkeletonComponent from '../components/Skeleton';

const AppContainer = () => {
    const [data, setData] = useState({
        response: null,
        isLoading: false,
        searchValue: ''
    });

    const loadItems = useCallback(() => {
        const { queryString } = data.searchValue;
        axios
            .get(`http://localhost:7000/items?q=${queryString}`)
            .then((response) => {
                if (response.data) {
                    setData({
                        response: response.data,
                        isLoading: false
                    });
                }
            });
    }, [data]);

    const handleSearchButton = (e) => {
        setData({ isLoading: true });
        e.preventDefault();
        loadItems();
    };

    const handleInputSearch = (e) => {
        setData({ searchValue: e.target.value });
    };

    return (
        <Router>
            <section>
                <header>
                    <NavbarComponent
                        handleInputSearch={handleInputSearch}
                        searchValue={data.searchValue}
                        handleSearchButton={handleSearchButton}
                    />
                </header>
                <section className="wrapper__breadcrumb">
                    {data.response && (
                        <BreadcrumbComponent categories={data.response.categories} />
                    )}
                </section>
                <section className="wrapper">
                    <div className="container">
                        <main className="wrapper__content">
                            {!data.isLoading && (
                                <Switch>
                                    <Route exact path="/" />
                                    <Route exact path="/items">
                                        {data.response && (
                                            <ProductListComponent
                                                products={data.response.items}
                                            />
                                        )}
                                    </Route>
                                    <Route exact path="/items/:id">
                                        <ProductDetailComponent />
                                    </Route>
                                </Switch>
                            )}
                            {data.isLoading && <SkeletonComponent />}
                        </main>
                    </div>
                </section>
            </section>
        </Router>
    );
};

export default AppContainer;
