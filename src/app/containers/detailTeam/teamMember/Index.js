import React, { Component } from "react";


export default class TeamMember extends Component {

  render() {
    return (
      <div className="widget businesshours-widget">
        <div className="widget-title">
          <p>
            <i className="fa fa-users" aria-hidden="true" /> Thành
            Viên
          </p>
          <div className="fix" />
        </div>
        <div className="widget-body">
          <div className="icon-block list-team">
            <ul className="list-unstyled">
              <li className="text-center">
                <a
                  href="/detail-user"
                  rel="popover"
                  data-trigger="hover"
                  data-popover-content="#userInfo"
                  data-placement="left"
                >
                  <img
                    src="../images/listing/author/3.jpg"
                    alt=""
                  />
                  <strong> User</strong>
                </a>
                <ul
                  className="list-unstyled list-item hide"
                  id="userInfo"
                >
                  <li>
                    <label>Tiền Vệ: </label>
                    <span className="pull-right">5</span>
                  </li>
                  <li>
                    <label>Hậu Vệ: </label>
                    <span className="pull-right">5</span>
                  </li>
                  <li>
                    <label>Thủ Môn: </label>
                    <span className="pull-right">5</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
