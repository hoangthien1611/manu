import React, { Component } from 'react';

class StadiumName extends Component {
    render() {
        return (
            <div className="slider-content text-center">
                <h4><a href="#"> {this.props.name}</a></h4>
                <div className="icon-block status">
                    <ul className="list-unstyled">
                        <li className="text-center">
                            <a class="button button-sm primary-bg btn-full" href="#"><i class="fa fa-plus"></i>Đặt Sân</a>
                        </li>
                    </ul>
                </div>
                <div className="icon-block level">
                    <div class="rating-area">
                        <ul>
                            <li class="text-center"><i class="fa fa-star"></i></li>
                            <li class="text-center"><i class="fa fa-star"></i></li>
                            <li class="text-center"><i class="fa fa-star"></i></li>
                            <li class="text-center"><i class="fa fa-star"></i></li>
                            <li class="text-center"><i class="fa fa-star"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default StadiumName;