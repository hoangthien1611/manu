import React, { Component } from "react";
import ReactDOM from "react-dom";
import Avatar from 'react-avatar-edit';
import { EditableTextField } from 'react-bootstrap-xeditable';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import html2canvas from 'html2canvas';
import MarkdownInput from '@opuscapita/react-markdown'
import InfiniteCarousel from 'react-leaf-carousel';
import { fetchData } from "./Action"
import { connect } from 'react-redux';

class ListUserDetailContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            urlImg: '',
            preview: null,
            open: false,
            slogan: 'Ba Dao Tren Tung Hat Gao',
            username: 'User Name',
            modal: false,
            heightEditor: 'auto',
            valueEditor: 'Nội Dung',
            classEditor: 'box-editor-child'
        }
        this.onCrop = this.onCrop.bind(this)
        this.onClose = this.onClose.bind(this)
        this.onToggle = this.onToggle.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.onCapture = this.onCapture.bind(this)
        this.onChoose = this.onChoose.bind(this)

    }
    componentWillMount() {
        const { fetchData } = this.props;
        const userId = this.props.match.params.id;
        fetchData(userId);
    }
    // Close preview avatar
    onClose() {
        this.setState({ preview: null })
    }

    // Crop avatar
    onCrop(preview) {
        this.setState({ preview })
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
    handleUpdate(name, value) {
        this.setState({ username: value });
    }

    onToggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChoose(e) {
        this.setState({ urlImg: e.target.src, classEditor: 'box-editor-child have-bg', heightEditor: '500px' })
    }

    onCapture() {
        this.setState({ modal: !this.state.modal });
        html2canvas(document.querySelector("#editor")).then(canvas => {
            var image = new Image();
            image.id = "pc"
            image.src = canvas.toDataURL();
            document.getElementById('imageStatus').src = image.src;
        });
    }

    findTeam = (str) => {
        if (str === "true") {
            return (
                <li className="text-center">
                    <span className="status-active">
                        Cần Tìm Đội !
                    </span>
                </li>
            )
        } else {
            return (
                <li className="text-center">
                    <span className="status-noactive">
                        Không Tìm Đội !
                    </span>
                </li>
            )
        }
    }

    render() {
        const value = this.props.appDataUserDetail.data;
        const { open } = this.state;
        const divStyle = {
            backgroundImage: 'url(' + this.state.urlImg + ')',
        };
        return (

            <div className="user-detail">
                <div className="slider">
                    <div id="cplgr-listing-details-slider" className="cplgr-listing-details-slider">
                        <div className="listing-details-slider-bg-1">
                            <div className="listing-details-slider-item"></div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="cplgr-listing-details-slider-wrapper">
                        <div className="slider-content text-center">
                            <div className="cplgr-lising-avater">
                                <img src="../../images/listing/author/3.jpg" className="img-responsive" alt="" />
                            </div>
                            <h4><a href="/">{value.name}</a></h4>
                            <div className="icon-block status">
                                <ul className="list-unstyled">

                                    {this.findTeam(value.findTeam)}
                                    {/* {value.findTeam} */}

                                    <li className="text-center">
                                        <a className="button button-sm primary-bg btn-full" href="/"><i className="fa fa-plus"></i>Mời Vào Đội </a>
                                    </li>
                                    <li className="text-center">
                                        <a className="button button-sm primary-bg btn-full" href="" /*onClick={this.updateUser()} */><i className="fa fa-comment"></i>Nhắn Tin </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="icon-block level">
                                <ul className="list-unstyled">
                                    <li className="text-center">
                                        <img width="100px" className="icon-level" src="../../images/icon-new/level.png" />
                                        <span> {value.describe}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="cplgr-main-container">
                        <div className="col-md-3">
                            <div className="sidebar">
                                <div className="widget contact-widget businesshours-widget">
                                    <div className="widget-title">
                                        <p>
                                            <i className="fa fa-info" aria-hidden="true" />
                                            <span> Thông Tin Cá Nhân</span>
                                        </p>
                                        <div className="fix" />
                                    </div>
                                    <div className="contact-address">
                                        <p className="address">
                                            <i className="fa fa-map-marker" aria-hidden="true" />
                                            <span>{value.address}</span>
                                            {/* <span>{value.address + ", " + value.district.name + ", " + value.city.name}</span> */}
                                        </p>
                                        <p>
                                            <i className="fa fa-phone" aria-hidden="true" />
                                            <span>{value.phoneNumber}</span>
                                        </p>
                                        <p>
                                            <i className="fa fa-calendar" aria-hidden="true" />
                                            <span>{value.birthday}</span>
                                        </p>
                                        <p>
                                            <i className="fa fa-user" aria-hidden="true" />
                                            <span>{value.gender}</span>
                                        </p>
                                        <ul className="social-link">
                                            <li>
                                                <a href="/">
                                                    <i className="fa fa-facebook" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="fa fa-twitter" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="fa fa-youtube-play" aria-hidden="true" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/">
                                                    <i className="fa fa-google-plus" aria-hidden="true" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h5 className="slogan">
                                <i className="fa fa-quote-left" aria-hidden="true" />
                                <i> {value.describe} </i>
                                <i className="fa fa-quote-right" aria-hidden="true" />
                            </h5>
                            <hr />
                            <div className="margin-balance">
                                <div className="grid cplgr-gallery">
                                    <div className="grid-item">
                                        <a href="../../images/gallery/2.jpg">
                                            <img src="../../images/gallery/2.jpg" className="img-responsive" alt="Listing-Gallery-image" />
                                        </a>
                                    </div>
                                    <div className="grid-item grid-item--width2">
                                        <a href="../../images/gallery/1.jpg">
                                            <img src="../../images/gallery/1.jpg" className="img-responsive" alt="Listing-Gallery-image" />
                                        </a>
                                    </div>
                                    <div className="grid-item">
                                        <a href="../../images/gallery/3.jpg">
                                            <img src="../../images/gallery/3.jpg" className="img-responsive" alt="Listing-Gallery-image" />
                                        </a>
                                    </div>
                                    <div className="grid-item">
                                        <a href="../../images/gallery/4.jpg">
                                            <img src="../../images/gallery/4.jpg" className="img-responsive" alt="Listing-Gallery-image" />
                                        </a>
                                    </div>
                                    <div className="grid-item">
                                        <a href="../../images/gallery/5.jpg">
                                            <img src="../../images/gallery/5.jpg" className="img-responsive" alt="Listing-Gallery-image" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="sidebar">

                                {/* widget */}
                                <div className="widget businesshours-widget">
                                    <div className="widget-title">
                                        <p>
                                            <i className="fa fa-clock-o" aria-hidden="true" /> Thời Gian Rãnh
                                    </p>
                                        {/* <p className="current-schedule">Open</p> */}
                                        <div className="fix" />
                                    </div>
                                    <div className="widget-body">
                                        <div className="businesshours">
                                            <div className="hrs-row">
                                                <span className="day">{value.favoriteTime}</span>
                                                {/* <span className="hours">Sáng</span> */}
                                            </div>
                                            <div className="fix" />
                                        </div>
                                    </div>
                                </div>
                                {/* widget */}
                                <div className="widget businesshours-widget">
                                    <div className="widget-title">
                                        <p>
                                            <i className="fa fa-crosshairs" aria-hidden="true" /> Vị Trí Đá
                                    </p>
                                        <div className="fix" />
                                    </div>
                                    <div className="widget-body">
                                        <div className="businesshours">
                                            <div className="icon-block list-team">
                                                <ul className="list-unstyled">
                                                    <li className="text-center">
                                                        <label className="stt">1</label>
                                                        <strong> {value.favoritePosition}</strong>
                                                        <span className="stt pull-right">100%</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* widget */}
                                <div className="widget businesshours-widget">
                                    <div className="widget-title">
                                        <p>
                                            <i className="fa fa-users" aria-hidden="true" /> Đội Đang Tham Gia
                                        </p>
                                        <p className="current-schedule"><a href="/">Mời</a></p>
                                        <div className="fix" />
                                    </div>
                                    <div className="widget-body">
                                        <div className="icon-block list-team">
                                            <ul className="list-unstyled">
                                                {
                                                    value.length !== 0 ?
                                                        value.teamStatusList.map((value1, key) =>
                                                            (
                                                                <li className="text-center">
                                                                    <a href="/">
                                                                        <img src="../../images/listing/author/3.jpg" alt="" />
                                                                        <strong> {value1.name}</strong>
                                                                    </a>

                                                                </li>
                                                            )
                                                        )
                                                        : []

                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fix"></div>
                    </div>
                    <div className="section-padding"></div>

                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        appDataUserDetail: state.appDataUserDetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (userId) => dispatch(fetchData(userId))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListUserDetailContainer)
