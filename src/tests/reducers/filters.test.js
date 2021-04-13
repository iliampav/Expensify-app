import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([{
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }]);
});

test('Should set sort by amount', () => {
    const state = filtersReducer(undefined, { type: 'SORTBY_AMOUNT', sortBy: 'amount' });
    expect(state.sortBy).toBe('amount');
})

test('should set sort by to date', () => { 
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORTBY_DATE', sortBy: 'date'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date')
})

test('Should set by text filter', () => {
    const state = filtersReducer(undefined, {type: 'TEXT_FILTER', text: 'aaa'});
    expect(state.text).toBe('aaa')
})

test('Should set by startDate filter', () => {
    const startDate = moment()
    const action = {
        type: 'SORT_BY_START_DATE', 
        startDate
    }
    const state = filtersReducer(undefined, action )
    expect(state.startDate).toEqual(startDate)
})

test('Should set by endDate filter', () => {
    const endDate = moment()
    const action = {
        type: 'SORT_BY_END_DATE', 
        endDate
    }
    const state = filtersReducer(undefined, action)
    expect(state.endDate).toEqual(endDate)
})