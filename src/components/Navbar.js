import React, { Component } from 'react';

class Navbar extends Component {
	state = {
		active: false
	};

	toggleActiveClass = () => {
		this.setState({ active: !this.state.active });
	};

	render() {
		return (
			<div>
				<nav className="navbar is-transparent">
					<div className="navbar-brand">
						<a className="navbar-item" href="#">
							esprezzo
						</a>

						<button
							className={
								this.state.active
									? `button navbar-burger is-active`
									: `button navbar-burger`
							}
							data-target="navMenu"
							onClick={this.toggleActiveClass}
							onBlur={this.toggleActiveClass}
						>
							<span />
							<span />
							<span />
						</button>
					</div>

					<div
						className={
							this.state.active ? `navbar-menu is-active` : `navbar-menu`
						}
						id="navMenu"
					>
						<div className="navbar-end">
							<a className="navbar-item" target="_blank">
								<span className="request-demo">Contact Us</span>
							</a>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
