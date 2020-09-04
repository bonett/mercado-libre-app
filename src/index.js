import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import RouteApp from './containers';

ReactDOM.render(
    <React.StrictMode>
        <RouteApp />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
