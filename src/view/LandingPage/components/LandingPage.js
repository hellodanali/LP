import React, { Component } from 'react';

import Navbar from './Navbar';
import TopFold from './TopFold';
import MidContent from './MidContent';
import CTABanner from './CTABanner';
import Footer from './Footer';

class LandingPage extends Component {
	render() {
		return (
			<div className="lp-container">
				<Navbar />
				<TopFold />
				<MidContent />
				<CTABanner />
				<Footer />
			</div>
		);
	}
}

export default LandingPage;
