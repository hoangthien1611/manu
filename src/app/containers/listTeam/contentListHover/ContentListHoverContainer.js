import React, { Component } from "react";
import { Popover } from "reactstrap";
export default class ContentListHoverContainer extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      popoverOpen: false,
      popoverOpen1: false,
      popoverOpen2: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }
  toggle1() {
    this.setState({
      popoverOpen1: !this.state.popoverOpen1
    });
  }
  toggle2() {
    this.setState({
      popoverOpen2: !this.state.popoverOpen2
    });
  }
  someHandler = () => {
    this.setState({
      popoverOpen: true
    });
  };
  someOtherHandler = () => {
    this.setState({
      popoverOpen: false
    });
  };
  render() {
    return (
      <div className="icon-block">
        <ul className="list-unstyled">
          <li className="text-center">
            <a
              href=""
              rel="popover"
              data-trigger="hover"
              data-popover-content="#listTeam1"
              data-placement="left"
            >
              <img
                width="50px"
                src="../images/icon-new/team.png"
                alt=""
                id={"Popover1" + this.props.id}
                onClick={this.toggle}
                onMouseEnter={this.someHandler}
                onMouseLeave={this.someOtherHandler}
              />
              <span>Cầu thủ</span>
            </a>

            <Popover
              placement="right"
              isOpen={this.state.popoverOpen}
              target={"Popover1" + this.props.id}
              toggle={this.toggle}
            >
              <ul className="list-unstyled list-item" id="listTeam1">
                <li>
                  <label className="img pull-left">
                    <img
                      src="http://streaming1.danviet.vn/upload/1-2018/images/2018-01-29/xuan-truong-1-1517235803-width500height333.jpg"
                      alt=""
                    />
                  </label>
                  <strong className="pull-left">
                    Lương xuân Trường
                  </strong>
                  <i className="fa fa-shield pull-right" />
                  <div className="fix" />
                </li>
                <li>
                  <label className="img pull-left">
                    <img
                      src="http://media3.onbox.vn:8088/phimonbox/images/20180126/1153840526475.jpg"
                      alt=""
                    />
                  </label>
                  <strong className="pull-left">
                    Nguyễn Quang Hải
                  </strong>
                  <i className="fa fa-user pull-right" />
                  <div className="fix" />
                </li>
                <li>
                  <label className="img pull-left">
                    <img
                      src="https://i.ytimg.com/vi/r3KtBrLU5Ag/mqdefault.jpg"
                      alt=""
                    />
                  </label>
                  <strong className="pull-left">Bùi Tiến Dũng</strong>
                  <i className="fa fa-user pull-right" />
                  <div className="fix" />
                </li>
                <li>
                  <label className="img pull-left">
                    <img
                      src="http://img.f50.bdpcdn.net/Assets/Media/2015/12/17/56/cong-phuong.jpg"
                      alt=""
                    />
                  </label>
                  <strong className="pull-left">
                    Nguyễn Công Phượng
                  </strong>
                  <i className="fa fa-user pull-right" />
                  <div className="fix" />
                </li>
                <li>
                  <label className="img pull-left">
                    <img
                      src="https://znews-photo-td.zadn.vn/w660/Uploaded/ohunua2/2018_01_21/925239_1376806455935165_225951942_n.jpg"
                      alt=""
                    />
                  </label>
                  <strong className="pull-left">Đỗ Duy Mạnh</strong>
                  <i className="fa fa-user pull-right" />
                  <div className="fix" />
                </li>
                <li>
                  <label className="img pull-left">
                    <img
                      src="http://m.msport.com.vn/upload/newsimages/171026_055757_391(349).jpg"
                      alt=""
                    />
                  </label>
                  <strong className="pull-left">Hà Đức Chinh</strong>
                  <i className="fa fa-user pull-right" />
                  <div className="fix" />
                </li>
                <li>
                  <label className="img pull-left">
                    <img
                      src="https://static.bongda24h.vn/medias/standard/2017/11/15/vanthanh.jpg"
                      alt=""
                    />
                  </label>
                  <strong className="pull-left">Vũ Văn Thanh</strong>
                  <i className="fa fa-user pull-right" />
                  <div className="fix" />
                </li>
              </ul>
            </Popover>
          </li>

          <div>
            <li className="text-center">
              <a
                href=""
                rel="popover"
                data-trigger="hover"
                data-popover-content="#listPosition1"
                data-placement="left"
              >
                <img
                  width="50px"
                  src="../images/icon-new/free.png"
                  alt=""
                  id={"Popover2" + this.props.id}
                  onClick={this.toggle1}
                  onMouseEnter={this.toggle1}
                  onMouseLeave={this.toggle1}
                />
                <span>Sân bóng</span>
              </a>
              <Popover
                placement="right"
                target={"Popover2" + this.props.id}
                toggle={this.toggle1}
                isOpen={this.state.popoverOpen1}
              >
                <ul
                  className="list-unstyled list-item"
                  id="listPosition1"
                >
                  <li>
                    <label htmlFor>Thép Việt</label>
                  </li>
                  <li>
                    <i className="fa fa-map-marker" />{" "}
                    <span>363 Nguyễn Hữu Thọ</span>,{" "}
                    <span>quận Cẩm Lệ</span>,{" "}
                    <span>thành phố Đà Nẵng</span>
                  </li>
                </ul>
              </Popover>
            </li>
          </div>

          <div>
            <li className="text-center">
              <a
                href=""
                rel="popover"
                data-trigger="hover"
                data-popover-content="#listFree1"
                data-placement="left"
                alt=""
              >
                <img
                  alt=""
                  width="50px"
                  src="../images/icon-new/free.png"
                  id={"Popover3" + this.props.id}
                  onClick={this.toggle2}
                  onMouseEnter={this.toggle2}
                  onMouseLeave={this.toggle2}
                />

                <span> Lịch Đá</span>
              </a>
              <div className="table hide" id="listFree1">
                <Popover
                  placement="right"
                  data-trigger="hover"
                  target={"Popover3" + this.props.id}
                  toggle={this.toggle2}
                  isOpen={this.state.popoverOpen2}
                >
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th />
                        <th>T2</th>
                        <th>T3</th>
                        <th>T4</th>
                        <th>T5</th>
                        <th>T6</th>
                        <th>T7</th>
                        <th>CN</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Sáng</td>
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>Chiều</td>
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                      </tr>
                      <tr>
                        <td>Tối</td>
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </Popover>
                >
              </div>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}
