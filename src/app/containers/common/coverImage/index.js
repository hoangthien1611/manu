import React, { Component } from "react";
import { Button, Modal } from "reactstrap";
import Avatar from "react-avatar-edit";

class CoverImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenModal: false,
      preview: ""
    };
  }

  onOpenModal = () => {
    this.setState({
      isOpenModal: true
    });
  };

  onCloseModal = () => {
    this.setState({
      isOpenModal: false
    });
  };

  onClose = () => {
    this.setState({ preview: null });
  };

  onCrop = preview => {
    this.setState({ preview });
  };

  render() {
    return (
      <div className="slider">
        <div
          id="cplgr-listing-details-slider"
          className="cplgr-listing-details-slider"
        >
          <div className="listing-details-slider-bg-1">
            <div className="listing-details-slider-item" />
          </div>
        </div>
        <button
          className="btn-config"
          onClick={this.onOpenModal}
          title="Thay đổi ảnh bìa"
        />

        <Modal
          isOpen={this.state.isOpenModal}
          onClose={this.onCloseModal}
          center
        >
          <div className="popup">
            <div className="popup-header">
              <h1>Tải Lên Ảnh Đại Diện</h1>
            </div>
            <div className="popup-body">
              <Avatar onCrop={this.onCrop} onClose={this.onClose} />
            </div>
            <Button
              color="secondary"
              style={{ marginLeft: 520 }}
              onClick={this.onCloseModal}
            >
              Lưu
            </Button>
            <Button
              color="secondary"
              style={{ marginLeft: 30 }}
              onClick={this.onCloseModal}
            >
              Cancel
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default CoverImage;
