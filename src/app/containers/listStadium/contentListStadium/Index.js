import React, { Component } from 'react';
import { Popover, PopoverBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import { DETAIL_STADIUM_PAGE } from "./../../../configs/RouteConfig"
export default class ContentStadium extends Component {

    constructor(props) {
        super(props);
        this.state = {
            popoverOpen: false,
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

    service = (service) => {
        if (service != undefined) {
            return service.map((value, key) => (
                <div className="col-md-4">
                    <p>
                        <label>
                            {value.name.toUpperCase()}:
                            </label>
                        <span className="text-green"> {value.detail}</span>
                    </p>
                </div>
            )
            )
        }
    }

    render() {
        return (
            <li>
                <div className="review-content">
                    <div className="row box-info">
                        <div className="col-md-12">
                            <Link to={DETAIL_STADIUM_PAGE + this.props.id}><h5 className="col-md-12">{this.props.name}</h5></Link>
                            <p>
                                <label>
                                    <i className="fa fa-map-marker" />
                                </label>
                                <span> {this.props.address}</span>
                            </p>
                            <p>
                                <label>
                                    <i className="fa fa-phone" />
                                </label>
                                <span> {this.props.mobile}</span>
                            </p>
                        </div>
                    </div>
                    <div className="row box-info">

                        {this.service(this.props.service)}

                    </div>
                    <div className="review-images-block">
                        <a href="/images/post/review/1.jpg" className="review-images">
                            <img src="/images/post/review/1.jpg" alt="img" className="img-responsive" width="100px" />
                        </a>
                        <a href="/images/post/review/2.jpg" className="review-images">
                            <img src="/images/post/review/2.jpg" alt="img" className="img-responsive" width="100px" />
                        </a>
                        <a href="/images/post/review/3.jpg" className="review-images">
                            <img src="/images/post/review/3.jpg" alt="img" className="img-responsive" width="100px" />
                        </a>
                        <a href="/images/post/review/4.jpg" className="review-images">
                            <img src="/images/post/review/4.jpg" alt="img" className="img-responsive" width="100px" />
                        </a>
                    </div>
                </div>
                <div className="icon-block">
                    <ul className="list-unstyled">
                        <li className="text-right">
                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Like">
                                <img width="50px" src="/images/icon-new/like.png" alt="" />
                                <span> Yêu Thích</span>
                            </a>
                        </li>
                        <li className="text-right">
                            <a href="javascript:void(0)" data-toggle="tooltip" data-placement="top" title="Report">
                                <img width="50px" src="/images/icon-new/report.png" alt="" />
                                <span> Báo Cáo</span>
                            </a>
                        </li>
                        <li className="text-right">
                            <img width="50px" src="/images/icon-new/free.png" alt="Mô tả"
                                id={"Popover" + this.props.id}
                                onMouseEnter={this.someHandler} onMouseLeave={this.someOtherHandler} />
                            <span> Bảng Gía</span>
                            <Popover placement="left" isOpen={this.state.popoverOpen} target={"Popover" + this.props.id} toggle={this.toggle}>
                                <PopoverBody>
                                    <div className="table" id="listFree2">
                                        <table className="table table-striped">
                                            <thead>
                                                <tr>
                                                    <th />
                                                    <th className="text-center">17h00 - 19h00</th>
                                                    <th className="text-center">Giờ Khác</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-left">
                                                        Sân 5
                                                </td>
                                                    <td className="text-center">
                                                        {this.props.map}
                                                    </td>
                                                    <td className="text-center">
                                                        {this.props.s5NormalPrice}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-left">
                                                        Sân 7
                                                </td>
                                                    <td className="text-center">
                                                        {this.props.s7GoldPrice}
                                                    </td>
                                                    <td className="text-center">
                                                        {this.props.s7NormalPrice}
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
            </li >
        );
    }
}

// const mapStateToProps = (state, ownProps) => {
//     return {
//         dataStatium: state.dataStatium,
//         check1: state.checkState1
//     }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         setCheck: (check1, check2) => {
//             dispatch({
//                 type: 'CHECK_STATE1',
//                 check1
//             })
//         }
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ContentStadium);


