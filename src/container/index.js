import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import NavbarComponent from '../components/Navbar';
import BreadcrumbComponent from '../components/Breadcrumb';
import ProductListComponent from '../components/Product/List';
import ProductDetailComponent from '../components/Product/Detail';
import SkeletonComponent from '../components/Skeleton';

const AppContainer = () => {
    const [initial, setInitial] = useState({
        queryString: 'ipod',
        breadcrumb: null,
        isLoading: false,
        products: null,
    });

    const handleSearchButton = (e) => {
        e.preventDefault();

        const { queryString } = initial;
        axios({
            method: 'get',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            mode: 'no-cors',
            url: `http://localhost:7000/items?q=${queryString}`
        })
            .then((response) => {
                console.log(response.json());
            })
            .catch((err) => {
                console.log(err);
            });
        /* const { queryString } = initial;
        fetch(`http://localhost:7000/items?q=${queryString}`, {
            method: 'GET',
            mode: 'no-cors'
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setInitial({ products: data });
                return data;
            })
            .catch((err) => {
                console.log(err);
                return err;
            }); */
    };

    const handleInputSearch = (e) => {
        setInitial({ queryString: e.target.value });
    };

    return (
        <Router>
            <section>
                <header>
                    <NavbarComponent
                        handleInputSearch={handleInputSearch}
                        searchValue={initial.queryString}
                        handleSearchButton={handleSearchButton}
                    />
                </header>
                <section className="wrapper__breadcrumb">
                    {initial.breadcrumb && <BreadcrumbComponent />}
                </section>
                <section className="wrapper">
                    <div className="container">
                        <main className="wrapper__content">
                            {!initial.isLoading && (
                                <Switch>
                                    <Route exact path="/" />
                                    <Route exact path="/items">
                                        <ProductListComponent />
                                    </Route>
                                    <Route exact path="/items/:id">
                                        <ProductDetailComponent />
                                    </Route>
                                </Switch>
                            )}
                            {initial.isLoading && <SkeletonComponent />}
                        </main>
                    </div>
                </section>
            </section>
        </Router>
    );
};

export default AppContainer;
