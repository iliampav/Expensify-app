import React from 'react';
import { shallow } from 'enzyme';
import totalExpenses from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

// beforeEach(() => {
//     totalExpenses = jest.fn();
// });

test('Should return 0 if no expense', () => {
    const res = totalExpenses([]);
    expect(res).toBe(0);
})

test('Should correctly add up a single expense', () => {
    const res = totalExpenses([expenses[0]])
    expect(res).toBe(195)
})

test('Should correctly add up a multiple expense', () => {
    const res = totalExpenses(expenses)
    expect(res).toBe(114195)
})