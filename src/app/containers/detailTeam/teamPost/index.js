import React, { Component } from "react";
import MarkdownInput from "@opuscapita/react-markdown";
import InfiniteCarousel from "react-leaf-carousel";
import html2canvas from "html2canvas";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

export default class TeamPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      urlImg: ""
    };
    this.onCapture = this.onCapture.bind(this);
    this.onChoose = this.onChoose.bind(this);
  }
  onCloseModal = () => {
    this.setState({ open: false });
  };

  onChoose(e) {
    this.setState({
      urlImg: e.target.src,
      classEditor: "box-editor-child have-bg",
      heightEditor: "500px"
    });
  }

  onCapture() {
    this.setState({ modal: !this.state.modal });
    html2canvas(document.querySelector("#editor")).then(canvas => {
      var image = new Image();
      image.id = "pc";
      image.src = canvas.toDataURL();
      document.getElementById("imageStatus").src = image.src;
    });
  }
  render() {
    const divStyle = {
      backgroundImage: "url(" + this.state.urlImg + ")"
    };
    return (
      <div className="col-md-12">
        <Form>
          <div className="box-post">
            <FormGroup>
              <FormGroup tag="fieldset">
                <FormGroup className="col-md-6 title-share" check>
                  <Label>
                    <Input type="radio" name="radio1" /> Tuyển Thành Viên
                  </Label>
                </FormGroup>
                <FormGroup className="col-md-6 title-share" check>
                  <Label check>
                    <Input type="radio" name="radio1" /> Tìm Đối Thủ
                  </Label>
                </FormGroup>
              </FormGroup>
            </FormGroup>
            <FormGroup className="box-editor" id="editor">
              <div className={this.state.classEditor} style={divStyle}>
                <MarkdownInput
                  onChange={this.handleValueChange}
                  // onBlur={() => console.log("blur")}
                  autoFocus={true}
                  readOnly={false}
                  showFullScreenButton={false}
                  hideToolbar={true}
                  locale="vi"
                />
              </div>
            </FormGroup>
            <FormGroup className="slide-bg">
              <InfiniteCarousel
                breakpoints={[
                  {
                    breakpoint: 500,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2
                    }
                  },
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 3
                    }
                  }
                ]}
                dots={true}
                showSides={true}
                sidesOpacity={0.5}
                sideSize={0.1}
                slidesToScroll={4}
                slidesToShow={4}
                scrollOnDevice={true}
              >
                <div className="background-share" onClick={this.onChoose}>
                  <img
                    src="../images/gallery/2.jpg"
                    className="img-responsive"
                    alt="Listing-Gallery"
                  />
                </div>
                <div className="background-share" onClick={this.onChoose}>
                  <img
                    src="../images/gallery/3.jpg"
                    className="img-responsive"
                    alt="Listing-Gallery"
                  />
                </div>
                <div className="background-share" onClick={this.onChoose}>
                  <img
                    src="../images/gallery/4.jpg"
                    className="img-responsive"
                    alt="Listing-Gallery"
                  />
                </div>
                <div className="background-share" onClick={this.onChoose}>
                  <img
                    src="../images/gallery/5.jpg"
                    className="img-responsive"
                    alt="Listing-Gallery"
                  />
                </div>
                <div className="background-share" onClick={this.onChoose}>
                  <img
                    src="../images/gallery/6.jpg"
                    className="img-responsive"
                    alt="Listing-Gallery"
                  />
                </div>
                <div className="background-share" onClick={this.onChoose}>
                  <img
                    src="../images/gallery/7.jpg"
                    className="img-responsive"
                    alt="Listing-Gallery"
                  />
                </div>
              </InfiniteCarousel>
            </FormGroup>
            <div className="text-right col-md-12 padding-none">
              <Button
                className="button button-sm primary-bg"
                onClick={this.onCapture}
              >
                <i className="fa fa-paper-plane" /> Đăng tin
              </Button>
            </div>
            <div className="fix" />
          </div>
        </Form>
        <hr />
        <Modal
          isOpen={this.state.modal}
          toggle={this.onToggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.onToggle}>Chia sẽ</ModalHeader>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClose={this.onCloseModal}
          >
            <span aria-hidden="true">x</span>
          </button>
          <ModalBody>
            <div className="w-box-comfirm">
              <div className="form-group title-share" check>
                <Label>
                  Đội ABC <span>Tìm Đối Thủ</span>
                </Label>
              </div>
              <div className="form-group">
                <img id="imageStatus" width="100%" alt="status" />
              </div>
              <div className="social text-center padding-none">
                <a href="" className="facebook-share">
                  <i className="fa fa-facebook" />{" "}
                  <span className="count">Chia sẽ lền facebook</span>
                </a>
                <a href="" className="twitter-share">
                  <i className="fa fa-twitter" />{" "}
                  <span className="count">Chia sẽ lên twitter</span>
                </a>
                <a href="" className="google-plus-share">
                  <i className="fa fa-google-plus" />{" "}
                  <span className="count">Chia sẽ lên google+</span>
                </a>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
