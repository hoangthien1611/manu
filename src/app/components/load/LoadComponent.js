import React, { Component } from "react";
import "./LoadStyle.css";

export default function LoadComponent() {
    return (
        <div className="container text-center">
            {/* <div className="row">
                <div className="col-sm-2">
                    <div className="sp sp-circle" />
                    <h5>Circle</h5>
                </div>
                <div className="col-sm-2">
                    <div className="sp sp-3balls" />
                    <h5>3 Balls</h5>
                </div>
                <div className="col-sm-2">
                    <div className="sp sp-volume" />
                    <h5>Volume</h5>
                </div>
                <div className="col-sm-2">
                    <div className="sp sp-vortex" />
                    <h5>Vortex</h5>
                </div>
                <div className="col-sm-2">
                    <div className="sp sp-slices" />
                    <h5>Slices</h5>
                </div>
                <div className="col-sm-2">
                    <div className="sp sp-sphere" />
                    <h5>Sphere</h5>
                </div>
            </div> */}
            <div className="row">
                {/* <div className="col-sm-2">
                    <div className="sp sp-bars" />
                    <h5>Bars</h5>
                </div>
                <div className="col-sm-2">
                    <div className="sp sp-clock" />
                    <h5>Clock</h5>
                </div> */}
                {/* <div className="col-sm-2"> */}
                <div className="sp sp-wave" />
                {/* </div> */}
                {/* <div className="col-sm-2">
                    <div className="sp sp-texture" />
                    <h5>Texture</h5>
                </div>
                <div className="col-sm-2">
                    <div className="sp sp-loadbar" />
                    <h5>LoadBar</h5>
                </div>
                <div className="col-sm-2">
                    <div className="sp sp-hydrogen" />
                    <h5>Hydrogen</h5>
                </div> */}
            </div>
        </div>

    );
}
