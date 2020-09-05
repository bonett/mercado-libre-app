import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavbarComponent from '../components/Navbar';
import BreadcrumbComponent from '../components/Breadcrumb';
import ProductListComponent from '../components/Product/List';
import ProductDetailComponent from '../components/Product/Detail';
import SkeletonComponent from '../components/Skeleton';

const AppContainer = () => {
    const [initial, setInitial] = useState({
        breadcrumb: null,
        isLoading: false,
        products: null
    });

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=ipod');
                const data = await response.json();
                console.log(data);
                setInitial({ products: data });
            } catch (e) {
                console.error(e);
            }
        }
        getProducts();
    }, []);

    const handleInputSearch = (e) => {
        console.log('e', e.target.value);
    };

    return (
        <Router>
            <section>
                <header>
                    <NavbarComponent handleInputSearch={handleInputSearch} />
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
                                            <ProductDetailComponent />
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
