import React, { Component } from "react";
import "./ErrorStyle.css";

class ErrorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text
        }
    }
    render() {
        return (
            <div className="text-center" >
                <label>{this.state.text}</label>
            </div>
        );
    }
}
export default ErrorComponent;