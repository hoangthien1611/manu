import React, { Component } from "react";


export default class TeamHaveExchanged extends Component {

  render() {
    return (
      <div className="widget businesshours-widget">
        <div className="widget-title">
          <p>
            <i className="fa fa-crosshairs" aria-hidden="true" /> Đã
            Giao Lưu
                    </p>
          <div className="fix" />
        </div>
        <div className="widget-body">
          <div className="businesshours">
            <div className="icon-block list-team">
              <ul className="list-unstyled">
                <li className="text-center">
                  <a
                    href=""
                    //   {
                    //     "/list-team/detail-team." +
                    //     value.teamId +
                    //     ".html"
                    //   }
                    rel="popover"
                    data-trigger="hover"
                    data-popover-content="#listTeam"
                    data-placement="left"
                  >
                    <img
                      src="../images/listing/author/3.jpg"
                      alt=""
                    />
                    <strong> Team </strong>
                  </a>
                  <ul
                    className="list-unstyled list-item hide"
                    id="listTeam"
                  >
                    <li>
                      <label>Thắng: </label>
                      <span className="pull-right">5</span>
                    </li>
                    <li>
                      <label>Thua: </label>
                      <span className="pull-right">5</span>
                    </li>
                    <li>
                      <label>Hòa: </label>
                      <span className="pull-right">5</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
