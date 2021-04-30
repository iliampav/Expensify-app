import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should correctly render expenses Sumary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={325}/>)
    expect(wrapper).toMatchSnapshot();
})

test('Should correctly render expenses Sumary with multiple expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={3254577542}/>)
    expect(wrapper).toMatchSnapshot();
})