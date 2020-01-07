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

store.subscribe(() => {
    const state = store.getState();
    const getVisible = getVisibleExpenses(state.expenses, state.filters)
    console.log(getVisible)
})

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 300, createdAt: 300}))
store.dispatch(addExpense({ description: 'Rent', amount: 1350 }))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

