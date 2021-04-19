import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expensesData  = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData [id] = { description, note, amount, createdAt}
    });
    database.ref('expenses').set(expensesData).then(() => done())
});

test('should setup remove expense', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('Should remove expense from the firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[1].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const action = store.getActions();
        const finalValue = [expenses[0], expenses[2]]
        expect(action[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`expenses/${id}`).once('value')        
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    })
});

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
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('Should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: 'mouse',
        amount: 3000,
        note: 'this one is better',
        createdAt: 1000
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')        
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('Should add default expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseDefault = {
        description: '',
            note: '',
            amount: 0,
            createdAt: 0
    }

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')        
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefault);
        done();
    });
});

test('Should Set up set expense action with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('Should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

