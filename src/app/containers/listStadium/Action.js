import {
    FETCH_LIST_STADIUM_BEGIN,
    FETCH_LIST_STADIUM_SUCCESS,
    FETCH_LIST_STADIUM_FAILURE
} from "./Constant";
import { LIST_STADIUM_URL, LIST_USER_URL, LIST_TEAM_URL } from "./../../configs/ApiConfig";
import { callApi } from "./../../utilities/ApiUtils";


export const fetchListStadiumBegin = () => ({
    type: FETCH_LIST_STADIUM_BEGIN
});

export const fetchListStadiumSuccess = items => ({
    type: FETCH_LIST_STADIUM_SUCCESS,
    payload: items
});

export const fetchListStadiumError = error => ({
    type: FETCH_LIST_STADIUM_FAILURE,
    payload: { error }
});

export function fetchData() {
    return async (dispatch) => {
        dispatch(fetchListStadiumBegin())
        const getRespone = await callApi('POST', LIST_STADIUM_URL, {});
        if (getRespone.hasOwnProperty('data')) {
            const listStadium = getRespone.data.data;
            dispatch(fetchListStadiumSuccess(listStadium));
        } else {
            dispatch(fetchListStadiumError());
        }
    }
}
