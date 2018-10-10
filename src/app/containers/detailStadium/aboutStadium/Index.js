import React, { Component } from 'react'

export default class AboutStadium extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="widget contact-widget businesshours-widget">
                <div className="widget-title">
                    <p>
                        <i className="fa fa-info" aria-hidden="true" />
                        <span> Thông Tin Sân</span>
                    </p>
                    <div className="fix" />
                </div>
                <div className="contact-address">
                    <p className="address">
                        <i className="fa fa-map-marker" aria-hidden="true" />
                        <span> {this.props.address}</span>
                    </p>
                    <p>
                        <i className="fa fa-phone" aria-hidden="true" />
                        <span> {this.props.mobile}</span>
                    </p>
                    <ul className="social-link">
                        <li>
                            <a href="/">
                                <i className="fa fa-facebook" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fa fa-twitter" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fa fa-youtube-play" aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <i className="fa fa-google-plus" aria-hidden="true" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
