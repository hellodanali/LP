import React, { Component } from 'react';

import RequestDemoButton from '../common/RequestDemoButton';

const CTABanner = () => {
	return (
		<div className="call-to-action">
			<h2>
				See for yourself why we're the #1 choice for GC, subs, and owners!
			</h2>
			<RequestDemoButton className="request-demo">
				Request a demo
			</RequestDemoButton>
		</div>
	);
};

export default CTABanner;
