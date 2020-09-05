import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponent from '../components/Navbar';
import BreadcrumbComponent from '../components/Breadcrumb';
import ProductListComponent from '../components/Product/List';

const AppContainer = () => {
    return (
        <Router>
            <section>
                <header>
                    <NavbarComponent />
                </header>
                <section className="wrapper__breadcrumb">
                    <BreadcrumbComponent />
                </section>
                <section className="wrapper">
                    <div className="container">
                        <main className="wrapper__content">
                            <Switch>
                                <Route exact path="/">
                                    <ProductListComponent />
                                </Route>
                                <Route exact path="/items">
                                    <ProductListComponent />
                                </Route>
                                <Route exact path="/items/:id">
                                    <ProductListComponent />
                                </Route>
                            </Switch>
                        </main>
                    </div>
                </section>
            </section>
        </Router>
    );
};

export default AppContainer;
