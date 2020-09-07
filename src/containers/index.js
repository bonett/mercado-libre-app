/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import HomeContainer from './Home';
import ItemsContainer from './Items';
import DetailsContainer from './Details';

const AppContainer = () => {
    return (
        <section>
            <BrowserRouter>
                <React.Fragment>
                    <Route path="" component={() => <HomeContainer />} />
                    <Route
                        exact
                        path="/items"
                        component={() => <ItemsContainer />}
                    />
                    <Route
                        path="/items/:id"
                        component={() => <DetailsContainer />}
                    />
                    <Redirect to={'/'} />
                </React.Fragment>
            </BrowserRouter>
        </section>
    );
};

export default AppContainer;
