import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponent from '../components/Navbar';
import HomeContainer from './HomeContainer';

const RouteApp = () => {
    return (
        <Router>
            <section>
                <header>
                    <NavbarComponent />
                </header>
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
