import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const RouteApp = () => {
    return (
        <Router>
            <React.Fragment>
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
