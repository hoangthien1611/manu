import React, { Component } from "react";
import axios from "axios";
import { TEAM_UPDATE_URL, TEAM_INSERT_URL, TEAM_DELETE_URL } from "./../../../configs/ApiConfig";
import { EditableSelect } from "react-bootstrap-xeditable";


class TeamSelectMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.exchange
    };
  }

  handleUpdate = (id, value) => {
    axios.post(TEAM_UPDATE_URL, {
      "id": id,
      "member": value
    })
      .then(response => {
        this.setState({ value: value });
      })
      .catch(function (error) {
      });
  }

  render() {
    const options = [
      {
        text: "Tuyển thành viên !",
        value: "true"
      },
      {
        text: "Đã đủ thành viên !",
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
        {/* <div className="icon-block status">
                  <ul className="list-unstyled">
                    <li className="text-center">
                      <span className="status-active">Tuyển Thành Viên !</span>
                    </li>
                    <li className="text-center">
                      <span className="status-noactive">
                        Đã Đủ Thành Viên !
                      </span>
                    </li>
                  </ul>
                </div> */}
      </ul>
    );
  }
}

export default TeamSelectMember;
