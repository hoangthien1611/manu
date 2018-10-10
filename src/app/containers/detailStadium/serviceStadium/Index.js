import React, { Component } from 'react';

class ServiceStadium extends Component {
    render() {
        return (
            <div className="widget businesshours-widget">
                <div className="widget-title">
                    <p>
                        <i className="fa fa-crosshairs" aria-hidden="true" /> Dịch Vụ
                    </p>
                    <div className="fix" />
                </div>
                <div className="widget-body">
                    <ul className="list-unstyled list-item">
                        {
                            this.props.service.map((value, key) => (
                                <li>
                                    <label>{value.name.toUpperCase()}: </label><span className="pull-right"> {value.detail}</span>
                                </li>
                            ))
                        }

                    </ul>
                </div>
            </div>
        );
    }
}

export default ServiceStadium;