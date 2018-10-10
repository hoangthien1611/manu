import { FETCH_LIST_USER_BEGIN, FETCH_LIST_USER_SUCCESS, FETCH_LIST_USER_FAILURE } from './Constant';
import { createStore } from 'redux';

const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false
}

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_LIST_USER_BEGIN:
            return {
                ...state,
                data: [],
                isFetching: true
            }
        case FETCH_LIST_USER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload.userList
            }
        case FETCH_LIST_USER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}
