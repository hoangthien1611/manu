import React, { Component } from "react";
import axios from "axios";
import { TEAM_UPDATE_URL, TEAM_INSERT_URL, TEAM_DELETE_URL } from "./../../../configs/ApiConfig";
import { EditableSelect } from "react-bootstrap-xeditable";


class TeamExchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "text-center btn-vs",
      value: this.props.exchange
    };
  }

  handleUpdate = (id, value) => {
    axios
      .post(TEAM_UPDATE_URL, {
        id: id,
        exchange: value
      })
      .then(response => {
        this.setState({ value: value });
        if (value === "false") {
          this.setState({ status: "text-center btn-vs hide" });
        } else {
          this.setState({ status: "text-center btn-vs" });
        }
      })
      .catch(function (error) { });
  };

  render() {
    const options = [
      {
        text: "Nhận giao lưu !",
        value: "true"
      },
      {
        text: "Không nhận giao lưu !",
        value: "false"
      }
    ];

    const defaultText = this.state.value;
    return (
      <ul className="list-unstyled">
        <li className="text-center">
          <span className="status-active">
            <EditableSelect
              name={this.props.id}
              onUpdate={this.handleUpdate}
              value={this.state.value}
              options={options}
              defaultText={defaultText}
            />
          </span>
        </li>
        <li className={this.state.status}>
          <a href="">
            <img width="70px" src="../images/icon-new/vs.png" alt="" />
            <span> Giao Lưu </span>
          </a>
        </li>
      </ul>
    );
  }
}

export default TeamExchange;
