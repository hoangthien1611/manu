import React, { Component } from "react";
import axios from "axios";
import { TEAM_UPDATE_URL, TEAM_INSERT_URL, TEAM_DELETE_URL } from "./../../../configs/ApiConfig";

import { FormGroup } from "reactstrap";

export default class InputTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      modal: false,
      favoriteTime: this.props.favoriteTime
    };
  }

  isChange = event => {
    var name = event.target.name;
    var value = event.target.value;

    this.setState({
      [name]: value
    });
  };

  handleUpdate = () => {
    var { favoriteTime } = this.state;
    axios
      .post(TEAM_UPDATE_URL, {
        id: this.props.id,
        favoriteTime: favoriteTime
      })
      .then(response => {
        this.setState({
          modal: !this.state.modal
        });
      })
      .catch(function (error) { });
  };

  render() {
    return (
      <div>

        <FormGroup>
          <input
            type="text"
            className="form-control"
            onChange={event => this.isChange(event)}
            name="favoriteTime"
            id="exampleEmail"
            value={this.state.favoriteTime}
          />
        </FormGroup>
      </div>
    );
  }
}
