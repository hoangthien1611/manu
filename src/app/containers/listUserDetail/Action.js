
import {
    FETCH_USER_DETAIL_BEGIN,
    FETCH_USER_DETAIL_SUCCESS,
    FETCH_USER_DETAIL_FAILURE
} from './Constant';
import { USER_DETAIL_URL } from "./../../configs/ApiConfig";
import axios from 'axios';
import { callApi } from "./../../utilities/ApiUtils";

export const fetchUserDetailBegin = () => ({
    type: FETCH_USER_DETAIL_BEGIN
});

export const fetchUserDetailSuccess = items => ({
    type: FETCH_USER_DETAIL_SUCCESS,
    payload: items
});

export const fetchUserDetailError = error => ({
    type: FETCH_USER_DETAIL_FAILURE,
    payload: { error }
});

export function fetchData(userId) {
    return (dispatch) => {
        dispatch(fetchUserDetailBegin())
        axios.get(USER_DETAIL_URL + "?userId=" + userId)
            .then(function (res) {
                if (res.status === 200) {
                    const items = res.data.data
                    dispatch(fetchUserDetailSuccess(items))
                } else {
                    dispatch(fetchUserDetailError())
                }
            })
            .catch(function (error) {
                dispatch(fetchUserDetailError(error))
            });
    }


}



