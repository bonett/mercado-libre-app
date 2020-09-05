import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponent from '../components/Navbar';
import BreadcrumbComponent from '../components/Breadcrumb';
import HomeContainer from './HomeContainer';

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
                <Switch>
                    <Route exact path="/">
                        <HomeContainer />
                    </Route>
                    <Route exact path="/items">
                        <HomeContainer />
                    </Route>
                    <Route exact path="/items/:id">
                        <HomeContainer />
                    </Route>
                </Switch>
            </section>
        </Router>
    );
};

export default AppContainer;
