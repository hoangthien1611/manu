import React, { Component } from "react";

import { connect } from "react-redux";
import axios from "axios";
import {
  DETAIL_TEAM_URL,
  TEAM_UPDATE_URL,
  TEAM_INSERT_URL,
  TEAM_DELETE_URL
} from "./../../configs/ApiConfig";
import Avatar from "react-avatar-edit";
import TeamExchange from "./teamExchange/Index";
import TeamName from "./teamName/Index";
import TeamSelectMember from "./teamSelectMember/Index";
import TeamAbout from "./teamAbout/Index";
import TeamTime from "./teamTime/Index";
import TeamComment from "./teamComment/Index";
import TeamContact from "./teamContact/Index";
import TeamHaveExchanged from "./teamHaveExchange/Index";
import TeamMember from "./teamMember/Index";
import TeamPost from "./teamPost";
import CoverImage from "../common/coverImage";
import { Button, Modal } from "reactstrap";

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

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentWillMount() {
    if (this.state.items === null) {
      axios
        .get(DETAIL_TEAM_URL + "?teamId=" + this.props.match.params.id)
        .then(response => {
          this.setState({ items: response.data.data });
        })
        .catch(function(error) {});
    }
  }

  // Close preview avatar
  onClose() {
    this.setState({ preview: null });
  }

  // Crop avatar
  onCrop(preview) {
    this.setState({ preview });
  }

  // Open Popup
  onOpenModal = () => {
    this.setState({ open: true });
  };
  // Close Popup
  onCloseModal = () => {
    this.setState({ open: false });
  };
  // update
  handleUpdate(name, value, id) {
    axios
      .post(TEAM_UPDATE_URL, {
        id: id,
        name: value
      })

      .then(response => {})
      .catch(function(error) {});
  }
  handleUpdate1(name, value, id) {
    axios
      .post(TEAM_UPDATE_URL, {
        id: id,
        describe: value
      })

      .then(response => {})
      .catch(function(error) {});
  }
  handleUpdate2(name, value, id) {
    axios
      .post(TEAM_UPDATE_URL, {
        id: id,
        favoriteTime: value
      })

      .then(response => {})
      .catch(function(error) {});
  }
  isChange = event => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  handleClik = (id, idhome) => {
    var { address, mobile, name } = this.state;
    axios
      .post(TEAM_UPDATE_URL, {
        id: id,

        home: {
          id: idhome,
          name: name,
          mobile: mobile,
          address: address
        }
      })
      .then(response => {})
      .catch(function(error) {});
  };

  prinData = () => {
    if (this.state.items !== null) {
      var value = this.state.items;
      return (
        <div className="user-detail">
          <CoverImage />
          <div className="container-fluid">
            <div className="cplgr-listing-details-slider-wrapper">
              <div className="slider-content text-center">
                <TeamName id={value.id} name={value.name} />
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
                    <TeamSelectMember id={value.id} exchange={value.canJoin} />
                  </ul>
                </div>
                <div className="icon-block level">
                  <TeamExchange id={value.id} exchange={value.canJoin} />
                </div>
              </div>
            </div>
            <div className="cplgr-main-container">
              <div className="col-md-3">
                <div className="sidebar">
                  <div className="widget contact-widget businesshours-widget">
                    <div>
                      <TeamAbout
                        id={value.id}
                        name={value.home.name}
                        address={value.home.address}
                        mobile={value.home.mobile}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 cplgr-listing-details-container">
              <h5 className="slogan"> </h5>
              <hr />
              <div className="margin-balance">
                <div className="grid cplgr-gallery">
                  <div className="grid-item">
                    <a href="/images/gallery/2.jpg">
                      <img
                        src="/images/gallery/2.jpg"
                        className="img-responsive"
                        alt="Listing-Gallery-image"
                      />
                    </a>
                  </div>
                  <div className="grid-item grid-item--width2">
                    <a href="/images/gallery/1.jpg">
                      <img
                        src="/images/gallery/1.jpg"
                        className="img-responsive"
                        alt="Listing-Gallery-image"
                      />
                    </a>
                  </div>
                  <div className="grid-item">
                    <a href="/images/gallery/3.jpg">
                      <img
                        src="/images/gallery/3.jpg"
                        className="img-responsive"
                        alt="Listing-Gallery-image"
                      />
                    </a>
                  </div>
                  <div className="grid-item">
                    <a href="/images/gallery/4.jpg">
                      <img
                        src="/images/gallery/4.jpg"
                        className="img-responsive"
                        alt="Listing-Gallery-image"
                      />
                    </a>
                  </div>
                  <div className="grid-item">
                    <a href="/images/gallery/5.jpg">
                      <img
                        src="/images/gallery/5.jpg"
                        className="img-responsive"
                        alt="Listing-Gallery-image"
                      />
                    </a>
                  </div>
                  <div className="fix" />
                </div>
              </div>
              <TeamPost />
              <TeamComment />
              <TeamContact />
            </div>
            <div className="col-md-3">
              <div className="sidebar">
                <div className="widget businesshours-widget">
                  <TeamTime id={value.id} favoriteTime={value.favoriteTime} />
                  <TeamHaveExchanged />
                </div>
                <TeamMember />
              </div>
              <div className="fix" />
            </div>
            <div className="section-padding" />
          </div>
        </div>
      );
    }
  };

  render() {
    return <div>{this.prinData()}</div>;
  }
}

export default connect()(ContentDetailContainer);
