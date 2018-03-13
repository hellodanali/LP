import React, { Component } from 'react';

import logo from '../../../assets/img/bc-logo.png';
import RequestDemoButton from '../common/RequestDemoButton';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar">
				<div className="navbar-container">
					<img className="bc-logo" src={logo} />

					<ul className="nav-menu">
						<li className="nav-item">For GCs</li>
						<li className="nav-item">For Subs</li>
						<li className="nav-item">For Owners</li>
						<li className="nav-item">About</li>
						<li className="nav-item login">Login</li>
						<li className="nav-item">
							<RequestDemoButton className={'request-demo-nav'}>
								Request Demo
							</RequestDemoButton>
						</li>
						<li className="icon">&#9776;</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
