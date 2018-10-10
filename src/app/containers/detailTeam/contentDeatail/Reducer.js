import axios from "axios";

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