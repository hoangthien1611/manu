import React, { Component } from "react";
import { connect } from "react-redux";
import ContentListTeamContainer from "./../contentListTeam/ContentListTeamContaiter";
import HeaderContentSearchListComponent from "./../../../components/contentSearchList/HeaderContentSearchListComponent";
import Loading from "./../../../components/load/LoadComponent";
import ErrorText from "./../../../components/error/ErrorComponent";
import { FETCH_LIST_TEAM_FAILURE_TEXT } from "./Constant";
import { loadData } from "./Action";
class ListTeamContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamData: []
    };
  }

  componentWillMount() {
    const { loadData } = this.props;
    loadData();
  }

  render() {
    const { isFetching, error } = this.props;
    return (
      <div className="cplgr-main-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="cplgr-listing-details-container">
                <div className="cplgr-listing-reviews">
                  <HeaderContentSearchListComponent />
                  <div className="cplgr-listing-review-body">
                    <ul className="listing-review">
                      {
                        isFetching
                          ? <Loading />
                          : error ? <ErrorText text={FETCH_LIST_TEAM_FAILURE_TEXT} />
                            :
                            this.props.teamList.data.length
                              ? this.props.teamList.data.map((value, key) => {
                                return (
                                  <ContentListTeamContainer
                                    key={key}
                                    id={value.id}
                                    teamId={value.teamId}
                                    name={value.name}
                                    describe={value.describe}
                                    home={value.home}
                                    captain={value.captain}
                                    ranking={value.ranking}
                                    favoriteTime={value.favoriteTime}
                                  />
                                );
                              })
                              : null}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    error: state.teamList.error,
    isFetching: state.teamList.isFetching,
    teamList: state.teamList
  };
};

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(loadData())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTeamContainer);
