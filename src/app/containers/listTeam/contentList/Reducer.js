import {
  FETCH_LIST_TEAM_BEGIN,
  FETCH_LIST_TEAM_SUCCESS,
  FETCH_LIST_TEAM_FAILURE
} from "./Constant";

const initialState = {
  data: [],
  isFetching: false,
  error: null
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LIST_TEAM_BEGIN:
      return {
        ...state,
        isFetching: true,
        data: []
      };

    case FETCH_LIST_TEAM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      };

    case FETCH_LIST_TEAM_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
        data: []
      };

    default:
      return state;
  }
}
