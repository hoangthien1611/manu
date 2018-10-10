import React, { Component } from 'react';

export default function FooterComponent() {
	return (
		<footer>
			<div className="footer-company-info section-padding-60 primary-bg text-center">
				<div className="container">
					<div className="row">
						<div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
							<div className="logo">
								<a href="#">
									<img src="../images/logo.png" className="img-responsive" alt="" />
								</a>
							</div>
							<p className="address">
								247 New Church Street, California, CA75846 <br /> Hotline: +1-0000-000-000
		                </p>
							<div className="social-link">
								<ul>
									<li><a href="#"><i className="fa fa-facebook" /></a></li>
									<li><a href="#"><i className="fa fa-twitter" /></a></li>
									<li><a href="#"><i className="fa fa-google-plus" /></a></li>
									<li><a href="#"><i className="fa fa-youtube-play" /></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-copyright primary-bg">
				<div className="container">
					<div className="row">
						<div className="col-sm-6">
							<p className="copyright-text">Copyright 2018, <a href="#">ListinGer</a>. All Rights Reserved.</p>
						</div>
						<div className="col-sm-6">
							<div className="footer-nav">
								<ul>
									<li><a href="#">Legal</a></li>
									<li><a href="#">Terms &amp; Conditions</a></li>
									<li><a href="#">Contact</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
