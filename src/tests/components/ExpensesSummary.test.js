import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSumamry } from '../../components/ExpensesSummary';

test('should render correctly ExpensesSummary with 1 expenses', () => {
    const wrapper = shallow(<ExpensesSumamry expenseCount={1} expensesTotal={235} />)
    expect(wrapper).toMatchSnapshot();

});

test('should render correctly ExpensesSummary with many expenses', () => {
    const wrapper = shallow(<ExpensesSumamry expenseCount={23} expensesTotal={23512340987} />)
    expect(wrapper).toMatchSnapshot();
});
