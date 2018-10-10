import React, { Component } from "react";
import axios from "axios";
import { TEAM_UPDATE_URL, TEAM_INSERT_URL, TEAM_DELETE_URL } from "./../../../configs/ApiConfig";
import { Modal, ModalHeader, ModalBody, FormGroup, Label } from "reactstrap";

export default class TeamAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      modal: false,
      name: this.props.name,
      address: this.props.address,
      mobile: this.props.mobile
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  // Open Popup
  onOpenModal = () => {
    this.setState({ open: true });
  };
  // Close Popup
  onCloseModal = () => {
    this.setState({ open: false });
  };

  isChange = event => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  handleUpdate = () => {
    var { address, mobile, name } = this.state;
    axios
      .post(TEAM_UPDATE_URL, {
        id: this.props.id,
        address: address,
        mobile: mobile,
        name: name
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
      <div className="widget contact-widget businesshours-widget">
        <div className="widget-title">
          <p>
            <i className="fa fa-info" aria-hidden="true" />
            <span> Thông Tin Đội Bóng</span>
          </p>
          <p className="current-schedule" onClick={this.toggle}>
            <a>
              <i className="fa fa-pencil" />
            </a>
          </p>

          <div className="fix" />
        </div>

        <div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className=""
          >
            <ModalHeader toggle={this.toggle}>Thông tin đội bóng</ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label for="exampleEmail">Sân bóng</Label>
                <input
                  className="form-control"
                  type="text"
                  onChange={event => this.isChange(event)}
                  name="name"
                  id="name"
                  value={this.state.name}
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleEmail">Địa chỉ</Label>
                <input
                  className="form-control"
                  type="text"
                  onChange={event => this.isChange(event)}
                  name="address"
                  id="address"
                  value={this.state.address}
                />
              </FormGroup>

              {/* <InputStadium
         
                name={this.state.name}
                address={this.state.address}
                mobile={this.state.mobile}
                validate="?"
                propClass="?"
                propsType="?"
              /> */}

              <FormGroup>
                <Label for="examplePassword">Số điện thoại</Label>
                <input
                  className="form-control"
                  type="text"
                  onChange={event => this.isChange(event)}
                  name="mobile"
                  id="mobile"
                  value={this.state.mobile}
                />
              </FormGroup>

              <div className="text-center">
                <button
                  className="button button-sm primary-bg btn btn-secondary"
                  onClick={this.handleUpdate}
                >
                  <i className="fa fa-save" /> Lưu
                </button>
              </div>
            </ModalBody>
          </Modal>
        </div>
        <div className="contact-address">
          <p className="edit ">
            <i className="fa fa-building" aria-hidden="true" />
            <span> {this.state.name}</span>
          </p>
          <p className="edit address ">
            <i className="fa fa-map-marker" aria-hidden="true" />
            <span>{this.state.address}</span>
          </p>
          <p className="edit phone">
            <i className="fa fa-phone" aria-hidden="true" />
            <span>{this.state.mobile}</span>
          </p>

          <ul className="social-link">
            <li>
              <a href="">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-youtube-play" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-google-plus" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
