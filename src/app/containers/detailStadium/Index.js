import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchData } from "./Action"
import AboutStadium from './aboutStadium/Index';
import NameStadium from './nameStadium/Index';
import PriceStadium from './priceStadium/Index';
import ServiceStadium from './serviceStadium/Index';
import RatingStadium from './ratingStadium/Index';
import CommentStadium from './commentStadium/Index';
import Loading from "./../../components/load/LoadComponent";
import ErrorText from "./../../components/error/ErrorComponent";
import { FETCH_DETAIL_STADIUM_FAILURE_TEXT } from "./Constant";

class DetailStadiumContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        const { fetchData } = this.props;
        const stadiumId = this.props.match.params.id;
        fetchData(stadiumId);
    }
    printAboutStadium = () => {
        if (this.props.stadiunDetailData.length != 0) {
            return (
                <AboutStadium
                    address={this.props.stadiunDetailData[0].address}
                    mobile={this.props.stadiunDetailData[0].mobile}
                />
            )
        }
    }
    printNameStadium = () => {
        if (this.props.stadiunDetailData.length != 0) {
            return (
                <NameStadium
                    name={this.props.stadiunDetailData[0].name}
                />
            )
        }
    }
    printPriceStadium = () => {
        if (this.props.stadiunDetailData.length != 0) {
            return (
                <PriceStadium
                    goldTime={this.props.stadiunDetailData[0].goldTime}
                    s5={this.props.stadiunDetailData[0].s5}
                    s7={this.props.stadiunDetailData[0].s7}
                />
            )
        }
    }
    printServiceStadium = () => {
        if (this.props.stadiunDetailData.length != 0) {
            return (
                <ServiceStadium
                    service={this.props.stadiunDetailData[0].service}
                />
            )
        }
    }
    printRatingStadium = () => {
        if (this.props.stadiunDetailData.length != 0) {
            return (
                <RatingStadium />
            )
        }
    }
    printCommentStadium = () => {
        if (this.props.stadiunDetailData.length != 0) {
            return (
                <CommentStadium />
            )
        }
    }
    render() {
        const { isFetching, error } = this.props;
        return (
            <div className="user-detail stadium">
                {
                    isFetching ? <Loading /> : error ? <ErrorText text={FETCH_DETAIL_STADIUM_FAILURE_TEXT} /> :
                        <div>
                            <div className="slider">
                                <div id="cplgr-listing-details-slider" className="cplgr-listing-details-slider">
                                    <div className="listing-details-slider-bg-1">
                                        <div className="listing-details-slider-item"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="cplgr-listing-details-slider-wrapper">
                                    {this.printNameStadium()}
                                </div>
                                <div className="cplgr-main-container">
                                    <div className="col-md-3">
                                        <div className="sidebar">
                                            {this.printAboutStadium()}
                                            <div className="widget businesshours-widget">
                                                <div className="widget-title">
                                                    <p>
                                                        <i className="fa fa-thumbs-up" aria-hidden="true" /> Yêu Thích
                                        </p>
                                                    <p className="current-schedule">1</p>
                                                    <div className="fix" />
                                                </div>
                                                <div className="widget-body">
                                                    <div className="icon-block list-team">
                                                        <ul className="list-unstyled">
                                                            <li className="text-center">
                                                                <a href="/detail-user">
                                                                    <img src="../images/listing/author/3.jpg" alt="" />
                                                                    <strong> Nguyen Van A</strong>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* widget */}
                                            <div className="widget businesshours-widget">
                                                <div className="widget-title">
                                                    <p>
                                                        <i className="fa fa-flag-checkered" aria-hidden="true" /> Báo Cáo
                                        </p>
                                                    <p className="current-schedule">1</p>
                                                    <div className="fix" />
                                                </div>
                                                <div className="widget-body">
                                                    <div className="icon-block list-team">
                                                        <ul className="list-unstyled">
                                                            <li className="text-center">
                                                                <a href="/detail-user" rel="popover" data-trigger="hover" data-popover-content="#userInfo" data-placement="right">
                                                                    <img src="../images/listing/author/3.jpg" alt="" />
                                                                    <strong> Nguyen Van A</strong>
                                                                </a>
                                                                <ul className="list-unstyled list-item hide" id="userInfo">
                                                                    <li>
                                                                        <label>Nhà vệ sinh bẩn quá !</label>
                                                                    </li>
                                                                    <li>
                                                                        <p>
                                                                            Nhà vệ sinh bẩn quá !
                                                            </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5 cplgr-listing-details-container">
                                        <div className="margin-balance">
                                            <div className="grid cplgr-gallery">
                                                <div className="grid-item">
                                                    <a href="../images/gallery/2.jpg">
                                                        <img src="../images/gallery/2.jpg" className="img-responsive" alt="Listing-Gallery-image" />
                                                    </a>
                                                </div>
                                                <div className="grid-item grid-item--width2">
                                                    <a href="../images/gallery/1.jpg">
                                                        <img src="../images/gallery/1.jpg" className="img-responsive" alt="Listing-Gallery-image" />
                                                    </a>
                                                </div>
                                                <div className="grid-item">
                                                    <a href="../images/gallery/3.jpg">
                                                        <img src="../images/gallery/3.jpg" className="img-responsive" alt="Listing-Gallery-image" />
                                                    </a>
                                                </div>
                                                <div className="grid-item">
                                                    <a href="../images/gallery/4.jpg">
                                                        <img src="../images/gallery/4.jpg" className="img-responsive" alt="Listing-Gallery-image" />
                                                    </a>
                                                </div>
                                                <div className="grid-item">
                                                    <a href="../images/gallery/5.jpg">
                                                        <img src="../images/gallery/5.jpg" className="img-responsive" alt="Listing-Gallery-image" />
                                                    </a>
                                                </div>
                                                <div className="fix" />
                                            </div>
                                        </div>
                                        <div className="cplgr-listing-reviews">
                                            {this.printCommentStadium()}
                                        </div>
                                        {this.printRatingStadium()}
                                    </div>
                                    <div className="col-md-4">
                                        <div className="sidebar">
                                            {/* widget */}
                                            {this.printPriceStadium()}
                                            {/* widget */}
                                            {this.printServiceStadium()}
                                        </div>
                                    </div>
                                    <div className="fix"></div>
                                </div>
                                <div className="section-padding"></div>
                            </div>
                        </div>
                }
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        error: state.stadiunDetailData.error,
        isFetching: state.stadiunDetailData.isFetching,
        stadiunDetailData: state.stadiunDetailData.data
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchData: (stadiumId) => dispatch(fetchData(stadiumId))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailStadiumContainer);

