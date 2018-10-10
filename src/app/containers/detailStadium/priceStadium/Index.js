import React, { Component } from 'react'

export default class StadiumPrice extends Component {
    render() {
        return (
            <div className="widget businesshours-widget">
                <div className="widget-title">
                    <p>
                        <i className="fa fa-dollar" aria-hidden="true" /> Bảng Giá
                </p>
                    <div className="fix" />
                </div>
                <div className="widget-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th />
                                <th className="text-center"> {this.props.goldTime}</th>
                                <th className="text-center"> Giờ Khác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-left">
                                    Sân 5
                </td>
                                <td className="text-center">
                                    {this.props.s5.goldPrice}
                                </td>
                                <td className="text-center">
                                    {this.props.s5.normalPrice}
                                </td>
                            </tr>
                            <tr>
                                <td className="text-left">
                                    Sân 7
                </td>
                                <td className="text-center">
                                    {this.props.s7.goldPrice}
                                </td>
                                <td className="text-center">
                                    {this.props.s7.normalPrice}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
