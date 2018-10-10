import React, { Component } from 'react';
import { USER_DETAIL_PAGE } from '../../../configs/RouteConfig';
import { Popover, PopoverBody } from 'reactstrap';
import { Link } from 'react-router-dom';

class ListUserContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            popoverOpen: false,
            popoverOpen1: false,
            popoverOpen2: false,

        };
    }

    toggle = () => {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }
    someHandler = () => {
        this.setState({
            popoverOpen: true
        });
    }
    someOtherHandler = () => {
        this.setState({
            popoverOpen: false
        });
    }
    toggle1 = () => {
        this.setState({
            popoverOpen1: !this.state.popoverOpen1
        });
    }
    someHandler1 = () => {
        this.setState({
            popoverOpen1: true
        });
    }
    someOtherHandler1 = () => {
        this.setState({
            popoverOpen1: false
        });
    }

    toggle2 = () => {
        this.setState({
            popoverOpen2: !this.state.popoverOpen2
        });
    }
    someHandler2 = () => {
        this.setState({
            popoverOpen2: true
        });
    }
    someOtherHandler2 = () => {
        this.setState({
            popoverOpen2: false
        });
    }
    findTeam = (str) => {
        if (str !== null && str !== undefined && str !== "") {
            if (str === "Có") {
                return (
                    <span className="text-green">Có</span>
                )
            } else {
                return (
                    <span className="text-red">Không</span>
                )
            }
        }
    }

    render() {
        return (
            <li>
                <div className="avatar-block">
                    <div className="avatar-thumb">
                        <Link to={USER_DETAIL_PAGE + this.props.userId}><img src="../images/post/avatar-block-1.jpg" className="img-responsive" alt="" /></Link>
                    </div>
                    <div className="comment-by">
                        <h5><Link to={USER_DETAIL_PAGE + this.props.userId}> {this.props.name}</Link></h5>
                        <p> {this.props.ranking}</p>
                        <a className="button button-sm primary-bg "><i className="fa fa-comment" /> Message</a>
                    </div>
                </div>
                <div className="review-content">
                    <p>
                        <strong>
                            <i className="fa fa-quote-left" aria-hidden="true" />
                            <i> {this.props.describe} </i>
                            <i className="fa fa-quote-right" aria-hidden="true" />
                        </strong>
                    </p>
                    <div className="row box-info">
                        <div className="col-md-3">
                            <p>
                                <label htmlFor>
                                    Tuổi:
                        </label>
                                <span> {this.props.birthday}</span>
                            </p>
                        </div>
                        <div className="col-md-3">
                            <p>
                                <label htmlFor>
                                    Giới tính:
                        </label>
                                <span> {this.props.gender}</span>
                            </p>
                        </div>
                        <div className="col-md-3">
                            <p>
                                <label htmlFor>
                                    Tìm Đội:
                                </label>
                                {this.findTeam(this.props.findTeam)}
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="review-images-block">
                        <a href="../images/icon-new/no-image.png" className="review-images">
                            <img src="../images/icon-new/no-image.png" alt="img" className="img-responsive" width="100px" />
                        </a>
                    </div>
                </div>
                <div className="icon-block">
                    <ul className="list-unstyled">
                        <li className="text-center">

                            <img width="50px" src="../images/icon-new/team.png" alt="Mô tả" id={"Popover" + this.props.userId}
                                onMouseEnter={this.someHandler} onMouseLeave={this.someOtherHandler} />
                            <span> Đội tuyển</span>

                            <Popover placement="left" isOpen={this.state.popoverOpen} target={"Popover" + this.props.userId} toggle={this.toggle}>
                                <ul className="list-unstyled list-item" id="listTeam1">
                                    {
                                        this.props.teamStatusList.length !== 0 ?
                                            this.props.teamStatusList.map((value1, key) =>
                                                (
                                                    <li>Tên đội: {value1.name}</li>
                                                )
                                            )
                                            : []
                                    }
                                </ul>
                            </Popover>
                        </li>
                        <li className="text-center">
                            <img width="50px" src="../images/icon-new/position.png" alt="Mô tả" id={"Popover" + this.props.userId + "-1"}
                                onMouseEnter={this.someHandler1} onMouseLeave={this.someOtherHandler1} />
                            <span> Vị trí đá</span>

                            <Popover placement="left" isOpen={this.state.popoverOpen1} target={"Popover" + this.props.userId + "-1"} toggle={this.toggle1} >
                                <ul className="list-unstyled list-item" id="listPosition1">
                                    <li>Vị trí đá: {this.props.favoritePosition}</li>
                                </ul>
                            </Popover>
                        </li>
                        <li className="text-center">
                            <img width="50px" src="../images/icon-new/free.png" id={"Popover" + this.props.userId + "-2"} alt="Mô tả"
                                onMouseEnter={this.someHandler2} onMouseLeave={this.someOtherHandler2} />
                            <span> Lịch Đá</span>

                            <Popover placement="left" isOpen={this.state.popoverOpen2} target={"Popover" + this.props.userId + "-2"} toggle={this.toggle2}>
                                <PopoverBody>
                                    <div className="table" id="listFree1">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th>

                                                    </th>
                                                    <th>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Sáng
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Chiều
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Tối
                                                    </td>
                                                    <td>
                                                        {this.props.favoriteTime}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </PopoverBody>
                            </Popover>
                        </li>
                    </ul>
                </div>
                <div className="fix" />
            </li>

        );
    }
}

export default ListUserContent;