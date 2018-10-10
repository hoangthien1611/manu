
import HeaderContentSearchListComponent from "../../components/contentSearchList/HeaderContentSearchListComponent";
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchData } from "./Action"
import ListUserContent from "./listUserContent/ListUserContent";
import Loading from "./../../components/load/LoadComponent";
import ErrorText from "./../../components/error/ErrorComponent";
import { FETCH_LIST_USER_FAILURE_TEXT } from "./Constant";

class ListUserContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const { fetchData } = this.props;
        fetchData();
    }

    render() {
        const { isFetching, error } = this.props;
        return (
            <div className="container-fluid" >
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
                                                : error ? <ErrorText text={FETCH_LIST_USER_FAILURE_TEXT} />
                                                    :
                                                    this.props.appDataUser.data.length ? (
                                                        this.props.appDataUser.data.map((value, key) => {
                                                            return <ListUserContent
                                                                key={key}
                                                                userId={value.userId}
                                                                name={value.name}
                                                                birthday={value.birthday}
                                                                gender={value.gender}
                                                                address={value.address}
                                                                describe={value.describe}
                                                                ranking={value.ranking}
                                                                phoneNumber={value.phoneNumber}
                                                                favoriteTime={value.favoriteTime}
                                                                favoritePosition={value.favoritePosition}
                                                                findTeam={value.findTeam}
                                                                teamStatusList={value.teamStatusList}
                                                            />
                                                        })
                                                    ) : null
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

function mapStateToProps(state) {
    return {
        error: state.appDataUser.error,
        isFetching: state.appDataUser.isFetching,
        appDataUser: state.appDataUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => dispatch(fetchData())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListUserContainer)



