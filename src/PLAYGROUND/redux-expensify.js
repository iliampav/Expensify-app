import { createStore, combineReducers } from 'redux';
import { v4 as uuid } from 'uuid';

//ADD_Expense

const addExpense = (
        { 
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = {}
    ) => ({
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
    }
})

// REMOVE EXPENSE

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

//EDIT EXPENSE

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// Text_FILTER

const setTextFilter = (text = '') => ({
    type: 'TEXT_FILTER',
    text
})

const sortByAmount = () => ({
    type: 'SORTBY_AMOUNT',
    sortBy: 'amount'
});

const sortByDate = () => ({
    type: 'SORTBY_DATE',
    sortBy: 'date'
})

const setStartDate = (startDate) => ({
    type: 'SORT_BY_START_DATE',
    startDate
})
const setEndDate = (endDate) => ({
    type: 'SORT_BY_END_DATE',
    endDate
})

//Expenses reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)  
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })        
        default:
            return state
    }
};

// filter Reducer

const filterReducerDefaultState = [{
    text: '',
    sortBy: 'date', //date or amount
    startDate: undefined,
    endDate: undefined

}]

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'TEXT_FILTER':
            if(state[0]) {
                return {
                    ...state[0],
                    text: action.text
                }  
            } else {
                return {
                    ...state,
                    text: action.text
                }  
            };
        case 'SORTBY_AMOUNT':
            return{
                ...state,
                sortBy: action.sortBy
            }
        case 'SORTBY_DATE':
            return{
                ...state,
                sortBy: action.sortBy
            }
        case 'SORT_BY_START_DATE':
                if(state[0]) {
                    return {
                        ...state[0],
                startDate: action.startDate
                    }  
                } else {
                    return {
                        ...state,
                startDate: action.startDate
                    }  
                };            
        case 'SORT_BY_END_DATE':
            if(state[0]) {
                return {
                    ...state[0],
            endDate: action.endDate
                }  
            } else {
                return {
                    ...state,
            endDate: action.endDate
                }  
            };
               
            
        default:
            return state
    }
}
// get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        }
        if(sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    });
};

// store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expense1 = store.dispatch(addExpense({ description: 'rent', amount: 34000, createdAt: -2500 }));
const expense2 = store.dispatch(addExpense({ description: 'Coffee', amount: 3000, createdAt: -1000 }));

// store.dispatch(removeExpense({ id:expense1.expense.id }))
// store.dispatch(editExpense(expense2.expense.id, { amount: 6000 }))

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));
// store.dispatch(setEndDate());

const demoState = {
    expense: [{
        id: 'asuioeghOG',
        description: 'January Rent',
        note: 'This was the final payment',
        amount: 125200,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};