import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  INDEX_PAGE,
  LIST_STADIUM_PAGE,
  LIST_USER_PAGE,
  USER_DETAIL_PAGE,
  LIST_TEAM_PAGE,
  DETAIL_TEAM_PAGE,
  DETAIL_STADIUM_PAGE
} from "./configs/RouteConfig";
import ListStadium from "./containers/listStadium/Index";
import DetailStadium from "./containers/detailStadium/Index";
import ListTeam from "./../app/containers/listTeam/contentList/Index";
import DetailTeam from "./containers/detailTeam/Index";
import ListUser from "./containers/listUser/Index";
import ListUserDetail from "./containers/listUserDetail/Index";

export default function AppRouter() {
  return (
    <Switch>
      <Route exact path={LIST_STADIUM_PAGE} component={ListStadium} />
      <Route exact path={INDEX_PAGE} component={ListStadium} />
      <Route exact path={DETAIL_STADIUM_PAGE + ":id"} component={DetailStadium} />
      <Route exact path={LIST_TEAM_PAGE} component={ListTeam} />
      <Route exact path={DETAIL_TEAM_PAGE + ":id"} component={DetailTeam} />
      <Route exact path={LIST_USER_PAGE} component={ListUser} />
      <Route exact path={USER_DETAIL_PAGE + ":id"} component={ListUserDetail} />
    </Switch>
  );
}