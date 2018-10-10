
import { 
    FETCH_USER_DETAIL_BEGIN, 
    FETCH_USER_DETAIL_SUCCESS,
    FETCH_USER_DETAIL_FAILURE } 
    from './Constant';
import { createStore } from 'redux';

const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false
}

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_DETAIL_BEGIN:
            return Object.assign({}, state, {
                data: [],
                isFetching: true
            });   
        case FETCH_USER_DETAIL_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload
            });
        case FETCH_USER_DETAIL_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: true
            });
        default:
            return state
    }
}
