import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import NavbarComponent from '../components/Navbar';
import BreadcrumbComponent from '../components/Breadcrumb';
import ProductListComponent from '../components/Product/List';
import ProductDetailComponent from '../components/Product/Detail';
import SkeletonComponent from '../components/Skeleton';

const AppContainer = () => {
    const [data, setData] = useState({
        response: null,
        isLoading: false,
        searchValue: '',
        selectedItem: null
    });

    const loadItems = useCallback(() => {
        const { queryString } = data.searchValue;
        axios
            .get(`http://localhost:7000/items?q=${queryString}`)
            .then((response) => {
                if (response.data) {
                    setData({
                        response: response.data,
                        isLoading: false
                    });
                }
            });
    }, [data]);

    const handleSelectedItem = () => {
        const item = {
            id: 'MLA862830072',
            title:
                'Shooter/gatillo Boton Fortnite Y Pubg Android E Ios X Unidad',
            price: {
                currency: 'ARS',
                amount: 259,
                decimals: 0
            },
            picture:
                'http://http2.mlstatic.com/D_608932-MLA31132844839_062019-I.jpg',
            condition: 'new',
            free_shipping: false,
            sold_quantity: 3,
            description:
                '--- PARA COMPRAS DE VARIAS UNIDADES DE DIFERENTES COLORES DEBES UTILIZAR EL CARRITO DE COMPRA --- SI NO SE SELECCIONAN LOS COLORES CON EL CARRITO NO ES POSIBLE CAMBIAR LOS COLORES POR MENSAJERIA, SE DESPACHARA EN EL COLOR QUE FIGURA EN SISTEMA --- Auricular Inalambrico InPods 12 TWS Bluetooth Para iPhone y Android Escuchá tu música donde quieras y con la caja cargadora recargá tus auriculares hasta 2 veces sin necesidad de enchufarla. No tienen botón, los sacas de la caja y conectan automáticamente. Con un toque en el auricular pausas la música o atendes llamadas, 2 toques subís o bajas el volumen, 3 toques pasas de canción y manteniendo 3 segundos activas el asistente del celular. Bluetooth 5.0 que permite que en llamadas funcionen ambos auriculares Duración de la batería 2 hs. aprox. Se entrega: - Dos Auriculares (Izquierdo y Derecho) - Cajita porta auriculares Cargadora - Cable Lightning - Manual - GARANTÍA DE 3 MESES (Todos los cargos de envió del producto para el uso de la garantía son a cargo del comprador) SELECCIONANDO "RETIRO EN DOMICILIO DEL VENDEDOR" AL MOMENTO DE TU COMPRA, PODES RETIRAR EN: - RAMOS MEJÍA (Horarios de atención 10 a 14 hs y 15 a 17 hs). A 8 cuadras de la Estación. HACEMOS FACTURA "A" O "B" CARACTERISTICAS: 1. Llamadas Binoaurales 2. Impedancia: 32 OHM 3. bt versión: BT v5.0 + EDR 4. bt uso banda: 2,4 GHz 5. nivel de potencia: Clase II 6. potencia de salida: 30Mw 7. distancia BT: barrera de 10 metros 8. Respuesta de frecuencia: 20-20000Hz 9. rango de tensión de funcionamiento: 3,0 V-4,2 V 10. sensibilidad del micrófono: 42dB 11. Con A2DP/AVRCP de alta calidad de transmisión de audio estéreo y protocolo de control remoto'
        };
        setData({ selectedItem: item });
    };

    const handleSearchButton = (e) => {
        e.preventDefault();
        /* handleSelectedItem(); */
        setData({ isLoading: true });
        loadItems();
    };

    const handleInputSearch = (e) => {
        setData({ searchValue: e.target.value });
    };

    return (
        <Router>
            <section>
                <header>
                    <NavbarComponent
                        handleInputSearch={handleInputSearch}
                        searchValue={data.searchValue}
                        handleSearchButton={handleSearchButton}
                    />
                </header>
                <section className="wrapper__breadcrumb">
                    {data.response && (
                        <BreadcrumbComponent
                            categories={data.response.categories}
                        />
                    )}
                </section>
                <section className="wrapper">
                    <div className="container">
                        <main className="wrapper__content">
                            {!data.isLoading && (
                                <Switch>
                                    <Route exact path="/" />
                                    <Route exact path="/items">
                                        {data.response && (
                                            <ProductListComponent
                                                products={data.response.items}
                                            />
                                        )}
                                    </Route>
                                    <Route exact path="/items/:id">
                                        {data.selectedItem && (
                                            <ProductDetailComponent
                                                item={data.selectedItem}
                                            />
                                        )}
                                    </Route>
                                </Switch>
                            )}
                            {data.isLoading && <SkeletonComponent />}
                        </main>
                    </div>
                </section>
            </section>
        </Router>
    );
};

export default AppContainer;
