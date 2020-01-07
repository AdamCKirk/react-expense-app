import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses';

test('should setup a list item that can be reused', () => {
    const wrapper = shallow(<ExpenseListItem key={expenses[1].id} {...expenses[1]} />)
    expect(wrapper).toMatchSnapshot()
});