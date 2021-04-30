import moment from 'moment';

// filter Reducer

const filterReducerDefaultState = [{
    text: '',
    sortBy: 'date', //date or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')

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

export default filterReducer