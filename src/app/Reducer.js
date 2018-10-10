import { combineReducers } from "redux";
import stadiunData from "./containers/listStadium/Reducer";
import stadiunDetailData from "./containers/detailStadium/Reducer";
import appDataUser from "./containers/listUser/Reducer";
import appDataUserDetail from "./containers/listUserDetail/Reducer";
import teamList from "./containers/listTeam/contentList/Reducer";

const rootReducer = combineReducers({
  stadiunData,
  stadiunDetailData,
  appDataUser,
  appDataUserDetail,
  teamList
});

export default rootReducer;
