import HeaderContentSearchListComponent from "./../../components/contentSearchList/HeaderContentSearchListComponent";
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchData } from "./Action";
import { FETCH_LIST_STADIUM_FAILURE_TEXT, TEXT_EMPTY } from "./Constant";
import ContentStadium from './contentListStadium/Index';
import Loading from "./../../components/load/LoadComponent";
import ErrorText from "./../../components/error/ErrorComponent"

class ListStadiumContainer extends Component {
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
            <div className="container-fluid">
                <div className="row" >
                    <div className="col-md-12">
                        <div className="cplgr-listing-details-container form-group">
                            <div className="cplgr-listing-reviews">
                                <HeaderContentSearchListComponent />
                                <div className="cplgr-listing-review-body">
                                    <ul className="listing-review no-avatar">
                                        {
                                            isFetching
                                                ? <Loading />
                                                : error ? <ErrorText text={FETCH_LIST_STADIUM_FAILURE_TEXT} />
                                                    :
                                                    this.props.stadiunData.length ? (
                                                        this.props.stadiunData.map((value, key) => {
                                                            console.log(value, 'value');
                                                            return <ContentStadium
                                                                key={key}
                                                                id={value.id != null ? value.id : TEXT_EMPTY}
                                                                name={value.name != null ? value.name : TEXT_EMPTY}
                                                                image={value.image != null ? value.image : TEXT_EMPTY}
                                                                address={value.address != null ? value.address : TEXT_EMPTY}
                                                                mobile={value.mobile != null ? value.mobile : TEXT_EMPTY}
                                                                goldTime={value.goldTime != null ? value.goldTime : TEXT_EMPTY}
                                                                s5GoldPrice={value.s5 != null ? value.s5.goldPrice : TEXT_EMPTY}
                                                                s5NormalPrice={value.s5 != null ? value.s5.normalPrice : TEXT_EMPTY}
                                                                s7GoldPrice={value.s7 != null ? value.s7.goldPrice : TEXT_EMPTY}
                                                                s7NormalPrice={value.s7 != null ? value.s7.normalPrice : TEXT_EMPTY}
                                                            />
                                                        })
                                                    ) : null
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        error: state.stadiunData.error,
        isFetching: state.stadiunData.isFetching,
        stadiunData: state.stadiunData.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => dispatch(fetchData())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListStadiumContainer);
