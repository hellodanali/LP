import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar is-transparent">
					<div className="navbar-brand">
						<a className="navbar-item" href="#">
							ChainTap
						</a>
					</div>

					<div className="navbar-menu">
						<div className="navbar-end">
							<a className="navbar-item" target="_blank">
								Why ChainTap?
							</a>
							<a className="navbar-item" target="_blank">
								Tech
							</a>
							<a className="navbar-item" target="_blank">
								About Us
							</a>{' '}
							<a className="navbar-item" target="_blank">
								Blog
							</a>
							<a className="navbar-item" target="_blank">
								<span className="request-demo">Request a demo</span>
							</a>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
