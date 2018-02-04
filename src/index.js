//default index.js imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

//new package imports
import {Provider} from "react-redux";

//application imports
import store from './store/ghibliStore'
import App from './containers/App'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , 
    document.getElementById('root'));

registerServiceWorker();
