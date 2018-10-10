import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  INDEX_PAGE,
  LIST_STADIUM_PAGE,
  LIST_USER_PAGE,
  LIST_TEAM_PAGE
} from "../../configs/RouteConfig";

export default function HeaderComponent() {
  return (
    <nav className="navbar navbar-default cplgr-default-navbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="/bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link to={INDEX_PAGE} className="navbar-brand">
            <img
              src="../images/logo.png"
              className="img-responsive"
              alt="mo ta"
              width="100px"
            />
          </Link>
        </div>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            <li>
              <Link to={LIST_STADIUM_PAGE}>Sân Bóng</Link>
            </li>
            <li>
              <Link to={LIST_USER_PAGE}>Thành Viên</Link>
            </li>
            <li>
              <Link to={LIST_TEAM_PAGE}>Đội Tuyển</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li className="multi-search">
              <form className="form form-inline" action="">
                <input className="form-control" />
                <button className="btn-search" type="submit">
                  <i className="fa fa-search" />
                </button>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
