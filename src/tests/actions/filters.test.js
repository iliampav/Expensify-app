import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';

test('Should generate set start date object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
         type: 'SORT_BY_START_DATE',
         startDate: moment(0)
    })
});

test('SHould Generate set start object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SORT_BY_END_DATE',
        endDate: moment(0)
    })
});

test(' Should use the filter property', () => {
    const action = setTextFilter('teste')
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text: 'teste'
    })
})

test('Should use the default filter property', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text: ''
    })
})

test('Should sort by Amount', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORTBY_AMOUNT',
        sortBy: 'amount'
    })
})

test('Should sort by date', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORTBY_DATE',
        sortBy: 'date'
    })
})