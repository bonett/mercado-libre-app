import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponent from '../components/Navbar';
import BreadcrumbComponent from '../components/Breadcrumb';
import HomeContainer from './HomeContainer';

const RouteApp = () => {
    return (
        <Router>
            <section>
                <header>
                    <NavbarComponent />
                </header>
                <section className="wrapper__breadcrumb">
                    <BreadcrumbComponent />
                </section>
                <Switch>
                    <Route exact path="/">
                        <HomeContainer />
                    </Route>
                </Switch>
            </section>
        </Router>
    );
};

export default RouteApp;
