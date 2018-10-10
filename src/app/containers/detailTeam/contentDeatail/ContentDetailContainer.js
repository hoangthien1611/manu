import React, { Component } from "react";

import { connect } from "react-redux";
import axios from "axios";
// import common from "../../config/common";
import Avatar from "react-avatar-edit";
// import TeamExchange from "../TeamExchange";
// import TeamName from "../TeamName";
// import TeamSelectMember from "../TeamSelectMember";
// import TeamAbout from "../TeamAbout";
// import TeamTime from "../TeamTime";
// import TeamComment from "../TeamComment";
// import TeamContact from "../TeamContact";
// import TeamHaveExchanged from "../TeamHaveExchanged";
// import TeamMember from "../TeamMember";
// import TeamPost from "../TeamPost"; 
import { Button, Modal } from 'reactstrap';

class ContentDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null,
      open: false,
      slogan: "",
      modal: false,
      name: null,
      address: null,
      mobile: null
    };
    this.toggle = this.toggle.bind(this);
  }

  //   toggle() {
  //     this.setState({
  //       modal: !this.state.modal
  //     });
  //   }

  //   componentWillMount() {
  //     if (this.state.items === null) {
  //       axios
  //         .get(common.teamDetailUrl + "?teamId=" + this.props.match.params.id)
  //         .then(response => {
  //           this.setState({ items: response.data.data });
  //         })
  //         .catch(function(error) {});
  //     }
  //   }

  //   // Close preview avatar
  //   onClose() {
  //     this.setState({ preview: null });
  //   }

  //   // Crop avatar
  //   onCrop(preview) {
  //     this.setState({ preview });
  //   }

  //   // Open Popup
  //   onOpenModal = () => {
  //     this.setState({ open: true });
  //   };
  //   // Close Popup
  //   onCloseModal = () => {
  //     this.setState({ open: false });
  //   };
  //   // update
  //   handleUpdate(name, value, id) {
  //     axios
  //       .post(common.teamUpdatelUrl, {
  //         id: id,
  //         name: value
  //       })

  //       .then(response => {
  //         console.log(response);
  //       })
  //       .catch(function(error) {});
  //   }
  //   handleUpdate1(name, value, id) {
  //     axios
  //       .post(common.teamUpdatelUrl, {
  //         id: id,
  //         describe: value
  //       })

  //       .then(response => {
  //         console.log(response);
  //       })
  //       .catch(function(error) {});
  //   }
  //   handleUpdate2(name, value, id) {
  //     axios
  //       .post(common.teamUpdatelUrl, {
  //         id: id,
  //         favoriteTime: value
  //       })

  //       .then(response => {
  //         console.log(response);
  //       })
  //       .catch(function(error) {});
  //   }
  //   isChange = event => {
  //     var name = event.target.name;
  //     var value = event.target.value;
  //     console.log(name);
  //     console.log(value);
  //     this.setState({
  //       [name]: value
  //     });
  //     console.log("sa");
  //     console.log(this.state.name);
  //   };
  //   handleClik = (id, idhome) => {
  //     var { address, mobile, name } = this.state;
  //     axios
  //       .post(common.teamUpdatelUrl, {
  //         id: id,

  //         home: {
  //           id: idhome,
  //           name: name,
  //           mobile: mobile,
  //           address: address
  //         }
  //       })
  //       .then(response => {
  //         console.log(response);
  //       })
  //       .catch(function(error) {});
  //   };

  prinData = () => {
    if (this.state.items !== null) {
      var value = this.state.items;
      return (
        <div className="user-detail">
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
          </div>
          <div className="container-fluid">
            <div className="cplgr-listing-details-slider-wrapper">
              <div className="slider-content text-center">
                {/* <TeamName id={value.id} name={value.name} /> */}

                <div className="rating-area">
                  <ul>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                    <li>
                      <i className="fa fa-star" />
                    </li>
                  </ul>
                  <span>(2 Reviews)</span>
                </div>

                <div className="icon-block status">
                  <ul className="list-unstyled">
                    {/* <TeamSelectMember id={value.id} exchange={value.canJoin} /> */}
                  </ul>
                </div>
                <div className="icon-block level">
                  {/* <TeamExchange id={value.id} exchange={value.canJoin} /> */}
                </div>
              </div>
            </div>
            <div className="cplgr-main-container">
              <div className="col-md-3">
                <div className="sidebar">
                  <div className="widget contact-widget businesshours-widget">
                    <div>
                      {/* <TeamAbout
                        id={value.id}
                        name={value.home.name}
                        address={value.home.address}
                        mobile={value.home.mobile}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 cplgr-listing-details-container">
              <h5 className="slogan"> </h5>
              <hr />
              {/* <TeamPost />
              <TeamComment />
              <TeamContact /> */}
            </div>

            <div className="col-md-3">
              <div className="sidebar">
                {/* widget */}
                <div className="widget businesshours-widget">
                  {/* <TeamTime id={value.id} favoriteTime={value.favoriteTime} /> */}

                  {/* widget */}

                  {/* <TeamHaveExchanged /> */}
                </div>
                {/* widget */}
                {/* <TeamMember /> */}
              </div>

              <div className="fix" />
            </div>
            <div className="section-padding" />
          </div>

          <Modal isOpen={this.state.open} onClose={this.onCloseModal} center>
            <div className="popup">
              <div className="popup-header">
                <h1>Tải Lên Ảnh Đại Diện</h1>
              </div>
              <div className="popup-body">
                <Avatar onCrop={this.onCrop} onClose={this.onClose} />
              </div>
              <Button
                color="secondary"
                style={{ marginLeft: 620 }}
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

          {/* <Footer /> */}
        </div>
      );
    }
  };

  render() {
    return <div>{this.prinData()}</div>;
  }
}

export default connect()(ContentDetailContainer);
