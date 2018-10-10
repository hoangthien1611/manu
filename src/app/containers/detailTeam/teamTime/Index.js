import React, { Component } from "react";
import axios from "axios";
import { TEAM_UPDATE_URL, TEAM_INSERT_URL, TEAM_DELETE_URL } from "./../../../configs/ApiConfig";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form

} from "reactstrap";
import InputTime from "./../inputTime/Index";
export default class TeamTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      favoriteTime: this.props.favoriteTime
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
      <div className="widget businesshours-widget">
        <div className="widget-title">
          <p>
            <i className="fa fa-clock-o" aria-hidden="true" /> Thời Gian Đá
          </p>
          <p className="current-schedule" onClick={this.toggle}>
            <a>
              <i className="fa fa-pencil" />
            </a>
          </p>
          <div className="fix" />
        </div>
        <div className="widget-body">
          <div className="businesshours">
            <div className="hrs-row">
              <span className="day">{this.state.favoriteTime}</span>
            </div>
            <div className="fix" />
          </div>
          <div>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className=""
            >
              <ModalHeader toggle={this.toggle}>Thời Gian Đá</ModalHeader>
              <ModalBody>
                <Form>

                  <InputTime favoriteTime={this.state.favoriteTime} />
                  <div className="text-center">
                    <button
                      className="button button-sm primary-bg btn btn-secondary"
                      onClick={this.handleUpdate}
                    >
                      <i className="fa fa-save" /> Lưu
                    </button>
                  </div>
                </Form>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}
