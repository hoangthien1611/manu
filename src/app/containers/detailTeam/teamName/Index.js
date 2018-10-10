import React, { Component } from "react";
import Avatar from "react-avatar-edit";
import { EditableTextField } from "react-bootstrap-xeditable";
import axios from "axios";
import { TEAM_UPDATE_URL, TEAM_INSERT_URL, TEAM_DELETE_URL } from "./../../../configs/ApiConfig";
import { Modal, ModalFooter } from "reactstrap";

export default class TeamName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      modal: false,
      name: this.props.name,
      src: "../images/listing/author/3.jpg"
    };
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

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

  handleUpdate = (id, value) => {
    axios
      .post(TEAM_UPDATE_URL, {
        id: id,
        name: value
      })
      .then(response => {
        this.setState({
          name: response.data.data.name
        });
      })
      .catch(function (error) { });
  };

  render() {
    return (
      <div>
        <div className="cplgr-lising-avater">
          <a>
            <img
              src="../images/listing/author/3.jpg"
              className="img-responsive"
              alt=""
            />
            <button
              className="btn-config"
              onClick={this.onOpenModal}
              title="Thay đổi ảnh đại diện"
            />
          </a>
        </div>
        <h4>
          <EditableTextField
            name={this.props.id}
            value={this.state.name}
            onUpdate={this.handleUpdate}
          />
        </h4>
        <Modal
          className="popup-avatar"
          isOpen={this.state.open}
          isClose={this.onCloseModal}
          center
        >
          <div className="popup">
            <div className="popup-header">
              <h1>Tải Lên Ảnh Đại Diện</h1>
            </div>
            <div className="popup-body">
              <Avatar
                width={400}
                height={400}
                cropRadius={150}
                onCrop={this.onCrop}
                onClose={this.onClose}
                src={this.state.src}
              />
            </div>
            <ModalFooter>
              <div className="text-center">
                <button className="button button-sm primary-bg btn btn-secondary">
                  <i className="fa fa-save" /> Lưu
                </button>
                <button
                  className="button button-sm primary-bg btn btn-secondary"
                  onClick={this.onCloseModal}
                >
                  <i className="fa fa-times" /> Hủy
                </button>
              </div>
            </ModalFooter>
          </div>
        </Modal>
      </div>
    );
  }
}
