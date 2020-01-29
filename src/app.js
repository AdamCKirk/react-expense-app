// React Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Routers
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';

// Styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import "react-dates/lib/css/_datepicker.css"

// Firebase
import { firebase } from './firebase/firebase';

//Components
import { startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// This is to check if the app has already rendered. It helps as it should only render once
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

// I have successfully used history here because I have imported the custom history library
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            };
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});
