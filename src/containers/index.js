import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponent from '../components/Nav-bar';
import HomeContainer from './HomeContainer';

const RouteApp = () => {
    return (
        <Router>
            <React.Fragment>
                <React.Fragment>
                    <NavbarComponent />
                </React.Fragment>
                <Switch>
                    <Route exact path="/">
                        <HomeContainer />
                    </Route>
                </Switch>
            </React.Fragment>
        </Router>
    );
};

export default RouteApp;
