
import {addExpense, editExpense, removeExpense } from '../../actions/expenses'


test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense(123, { note: 'new value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 123,
        updates: { note: 'new value' }
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseData ={
        description: 'Rent',
        amount: 102500,
        createdAt: 3000,
        note: 'This is for the rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expense action object with default objects', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    })
});