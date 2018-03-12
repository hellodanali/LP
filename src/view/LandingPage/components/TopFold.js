import React, { Component } from 'react';

import RequestDemoButton from '../common/RequestDemoButton';
import iphone from '../../../assets/img/iphone.png';

class TopFold extends Component {
	render() {
		return (
			<div className="tf-container">
				<div className="light-blue">
					<div className="blue" />
					<div className="content">
						<h1>Forward Bit Invites</h1>
						<h2>
							Track ITBs from SmartBid, iSqFt, BlueBook, and more - all in one
							place!
						</h2>
						<RequestDemoButton className={'request-demo'}>
							Request a demo
						</RequestDemoButton>
					</div>
					<img className="iphone" src={iphone} />
				</div>
				<h2 className="related">You might also like...</h2>
			</div>
		);
	}
}

export default TopFold;
