import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponent from '../components/Navbar';
import BreadcrumbComponent from '../components/Breadcrumb';
import ProductListComponent from '../components/Product/List';
import SkeletonComponent from '../components/Skeleton';

const AppContainer = () => {
    const [initial, setInitial] = useState({
        breadcrumb: null,
        isLoading: true
    });
    return (
        <Router>
            <section>
                <header>
                    <NavbarComponent />
                </header>
                <section className="wrapper__breadcrumb">
                    {
                        initial.breadcrumb && (<BreadcrumbComponent />)
                    }
                </section>
                <section className="wrapper">
                    <div className="container">
                        <main className="wrapper__content">
                            {
                                !initial.isLoading && (
                                    <Switch>
                                        <Route exact path="/" />
                                        <Route exact path="/items">
                                            <ProductListComponent />
                                        </Route>
                                        <Route exact path="/items/:id">
                                            <ProductListComponent />
                                        </Route>
                                    </Switch>
                                )
                            }
                            {
                                initial.isLoading && (
                                    <SkeletonComponent />
                                )
                            }
                        </main>
                    </div>
                </section>
            </section>
        </Router>
    );
};

export default AppContainer;
