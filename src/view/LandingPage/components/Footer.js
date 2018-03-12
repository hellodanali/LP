import React, { Component } from 'react';

import logo from '../../../assets/img/bc-logo.png';
import facebook from '../../../assets/img/facebook.png';
import linkedin from '../../../assets/img/linkedin.png';
import twitter from '../../../assets/img/twitter.png';

const Footer = () => {
	return (
		<div className="footer-container">
			<div className="content">
				<div>
					<img className="bc-logo" src={logo} />
				</div>
				<ul>
					<li className="subtitle">OUR PRODUCT</li>
					<li>For GCs</li>
					<li>For Subs</li>
					<li>For Owners</li>
					<li>Videos</li>
				</ul>
				<ul>
					<li className="subtitle">COMPANY</li>
					<li>About</li>
					<li>Career</li>
					<li>Blog</li>
					<li>Events</li>
				</ul>
				<ul>
					<li className="subtitle">GET IN TOUCH</li>
					<li>Help Center</li>
					<li>Contact Support</li>
					<li>Request a Demo</li>
				</ul>
				<ul className="connect">
					<li className="subtitle">CONNECT</li>
					<li>
						<a>
							<img src={facebook} />
						</a>
						<a>
							<img src={linkedin} />
						</a>
						<a>
							<img src={twitter} />
						</a>
					</li>
				</ul>
			</div>
			<hr className="break" />
			<div className="legal">
				<p>
					<span>&#169;</span> BuildingConnected 2017
				</p>
				<ul>
					<li>Terms of Service</li>
					<li>Privacy Policy</li>
					<li>
						<a href="mailto:support@buildingconnected.com" target="_top">
							support@buildingconnected.com
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
