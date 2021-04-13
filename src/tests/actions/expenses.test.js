import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Deveria editar', () => {
    const action = editExpense('123abc', { note: 'New note value' });
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates: {
            note: 'New note value'
        }
    })
})

test('Should setUp add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 123456,
        createdAt: 1000,
        note: 'This was last month rent'
    };
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should set up add expenses with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})