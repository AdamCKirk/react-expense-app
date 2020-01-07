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

// Actions
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters'

// Selectors
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

