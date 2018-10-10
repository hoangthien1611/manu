
import axios from "axios";

import {
  FETCH_LIST_TEAM_BEGIN,
  FETCH_LIST_TEAM_SUCCESS,
  FETCH_LIST_TEAM_FAILURE
} from "./Constant";
import { LIST_TEAM_URL } from "./../../../configs/ApiConfig";

export const fetchListTeamBegin = () => ({
  type: FETCH_LIST_TEAM_BEGIN
});

export const fetchListTeamSuccess = teamList => ({
  type: FETCH_LIST_TEAM_SUCCESS,
  payload: teamList
});

export const fetchListTeamError = error => ({
  type: FETCH_LIST_TEAM_FAILURE,
  payload: { error }
});

export function loadData(url) {
  return dispatch => {
    dispatch(fetchListTeamBegin());
    axios
      .post(LIST_TEAM_URL, {})
      .then(function (res) {
        if (res.status === 200) {
          const items = res.data.data.teamList;
          dispatch(fetchListTeamSuccess(items));
        } else {
          dispatch(fetchListTeamError());
        }
      })
      .catch(function (error) {
        dispatch(fetchListTeamError(error));
      });
  };
}
