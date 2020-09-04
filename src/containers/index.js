import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponent from '../components/Nav-bar';

const RouteApp = () => {
    return (
        <Router>
            <React.Fragment>
                <NavbarComponent />
                <Switch>
                    <Route exact path="/">
                        <h1>Hola</h1>
                    </Route>
                </Switch>
            </React.Fragment>
        </Router>
    );
};

export default RouteApp;
