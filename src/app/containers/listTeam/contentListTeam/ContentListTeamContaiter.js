import React, { Component } from "react";
import { DETAIL_TEAM_PAGE } from "./../../../configs/RouteConfig";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import ContentListImageContainer from "./../contentListImage/ContentListImageContainer";
import ContentListHoverContainer from "./../contentListHover/ContentListHoverContainer";

class ContentListTeamContainer extends Component {
  render() {
    return (
      <div>
        <div className="cplgr-listing-review-body">
          <ul className="listing-review">
            <li>
              <div className="avatar-block">
                <div className="avatar-thumb">
                  <Link to={DETAIL_TEAM_PAGE + this.props.teamId}>
                    <img
                      src="../images/post/avatar-block-1.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="comment-by">
                  <h5>
                    <Link to={DETAIL_TEAM_PAGE + this.props.teamId}>
                      {this.props.name}
                    </Link>
                  </h5>
                  <p>{this.props.level}</p>
                  <b>{this.props.ranking}</b>
                  <a className="button button-sm primary-bg ">
                    <i className="fa fa-comment" /> Message
                  </a>
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
                      <label htmlFor="true">Establish:</label>
                      <span>10/09/1999</span>
                    </p>

                    <p>
                      <label htmlFor="true">Stadium:</label>
                      {this.props.home.name}
                    </p>
                  </div>
                  <div className="col-md-3">
                    <p>
                      <label htmlFor="true">Home Competitor:</label>
                      <span className="text-green">Yes</span>
                    </p>
                    <p>
                      <label htmlFor="true">
                        Id: {this.props.captain.id}-{this.props.captain.name}
                      </label>
                    </p>
                  </div>
                  <div className="col-md-3">
                    <p>
                      <label htmlFor="true">Away Competitor:</label>
                      <span className="text-red">No</span>
                    </p>
                    <p>
                      <label htmlFor="true">favoriteTime: </label>
                      {this.props.favoriteTime}
                    </p>

                    {/* <p>
                      <label htmlFor>{this.props.id}</label>
                    </p> */}
                  </div>
                  <div className="col-md-3">
                    <p>
                      <label htmlFor="true">Team:</label>
                      <span className="text-red">Full</span>
                    </p>
                  </div>
                </div>
                <hr />
                <ContentListImageContainer />
              </div>
              <ContentListHoverContainer />
              <div className="fix" />
              <hr />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default connect()(ContentListTeamContainer);
