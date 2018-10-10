import { FETCH_LIST_USER_BEGIN, FETCH_LIST_USER_SUCCESS, FETCH_LIST_USER_FAILURE } from './Constant';
import { LIST_USER_URL } from "./../../configs/ApiConfig";
import axios from 'axios';

export const fetchListUserBegin = () => ({
    type: FETCH_LIST_USER_BEGIN
});

export const fetchListUserSuccess = items => ({
    type: FETCH_LIST_USER_SUCCESS,
    payload: items
});

export const fetchListUserError = error => ({
    type: FETCH_LIST_USER_FAILURE,
    payload: { error }
});

export function fetchData(dispatch) {

    return (dispatch) => {
        dispatch(fetchListUserBegin())
        axios.post(LIST_USER_URL, {})
            .then(function (res) {
                if (res.status === 200) {
                    const items = res.data.data
                    dispatch(fetchListUserSuccess(items))
                } else {
                    dispatch(fetchListUserError())
                }
            })
            .catch(function (error) {
                dispatch(fetchListUserError(error))
            });
    }


}



