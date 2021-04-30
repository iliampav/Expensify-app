// Text_FILTER

export const setTextFilter = (text = '') => ({
    type: 'TEXT_FILTER',
    text
})

export const sortByAmount = () => ({
    type: 'SORTBY_AMOUNT',
    sortBy: 'amount'
});

export const sortByDate = () => ({
    type: 'SORTBY_DATE',
    sortBy: 'date'
})

export const setStartDate = (startDate) => ({
    type: 'SORT_BY_START_DATE',
    startDate
})
export const setEndDate = (endDate) => ({
    type: 'SORT_BY_END_DATE',
    endDate
})