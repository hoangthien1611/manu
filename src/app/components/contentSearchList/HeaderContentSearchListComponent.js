import React, { Component } from 'react';

export default class HeaderContentSearchListComponent extends Component {
    render() {
        return (
            <div className="cplgr-listing-review-header">
                <h5>10 result for <span>"Name"</span></h5>
                <div className="dropdown">
                    <select className="form-control btn btn-default" id="sel1">
                        <option>Filter by</option>
                        <option>ASC</option>
                        <option>DESC</option>
                    </select>
                    <i className="fa fa-sort" />
                </div>
                <div className="fix" />
            </div>
        );
    }
}

