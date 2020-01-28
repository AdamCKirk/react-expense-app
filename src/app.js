// React Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Routers
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

// Styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import "react-dates/lib/css/_datepicker.css"

// Firebase
import './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

