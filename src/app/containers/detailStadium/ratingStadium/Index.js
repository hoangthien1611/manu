import React, { Component } from 'react'

export default class RatingStadium extends Component {
    render() {
        return (
            <div className="write-review-section">
                <div className="write-review-title">
                    <h5>Đánh Gía</h5>
                </div>
                <div className="write-review-inner">
                    <h6>Hãy đánh giá chúng tôi !</h6>
                    <div className="rating-stars text-center">
                        <ul id="stars" className="stars">
                            <li className="star" title="Poor" data-value={1}>
                                <i className="fa fa-star" />
                            </li>
                            <li className="star" title="Fair" data-value={2}>
                                <i className="fa fa-star" />
                            </li>
                            <li className="star" title="Good" data-value={3}>
                                <i className="fa fa-star" />
                            </li>
                            <li className="star" title="Excellent" data-value={4}>
                                <i className="fa fa-star" />
                            </li>
                            <li className="star" title="WOW!!!" data-value={5}>
                                <i className="fa fa-star" />
                            </li>
                        </ul>
                    </div>
                    <form className="review-form">
                        <div className="form-group">
                            <label htmlFor="review-input-title">Tiêu Đề</label>
                            <input type="text" className="form-control" id="review-input-title" placeholder="Write the title" />
                        </div>
                        <div className="form-group textarea-form-group">
                            <label htmlFor="review-input-entry">Nội Dung</label>
                            <textarea rows={8} cols={50} id="review-input-entry" className="form-control" placeholder="Write your review here" defaultValue={""} />
                        </div>
                        <button type="submit" className="button primary-bg">Gửi</button>
                    </form>
                </div>
            </div>
        )
    }
}
