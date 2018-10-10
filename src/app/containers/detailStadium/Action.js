import {
    FETCH_DETAIL_STADIUM_BEGIN,
    FETCH_DETAIL_STADIUM_SUCCESS,
    FETCH_DETAIL_STADIUM_FAILURE
} from "./Constant";
import { DETAIL_STADIUM_URL, LIST_STADIUM_URL } from "./../../configs/ApiConfig";
import { callApi } from "./../../utilities/ApiUtils";


export const fetchDetailStadiumBegin = () => ({
    type: FETCH_DETAIL_STADIUM_BEGIN
});

export const fetchDetailStadiumSuccess = items => ({
    type: FETCH_DETAIL_STADIUM_SUCCESS,
    payload: items
});

export const fetchDetailStadiumError = error => ({
    type: FETCH_DETAIL_STADIUM_FAILURE,
    payload: { error }
});

export function fetchData(stadiumId) {
    return async (dispatch) => {
        dispatch(fetchDetailStadiumBegin())
        const getRespone = await callApi('POST', LIST_STADIUM_URL, { 'stadiumId': stadiumId });
        if (getRespone.hasOwnProperty('data')) {
            const listStadium = getRespone.data.data;
            dispatch(fetchDetailStadiumSuccess(listStadium))
        } else {
            dispatch(fetchDetailStadiumError())
        }
    }
}
