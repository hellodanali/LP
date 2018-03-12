import React, { Component } from 'react';

import Card from '../common/Card';
import RequestDemoButton from '../common/RequestDemoButton';
import icon from '../../../assets/img/icon.png';

class MidContent extends Component {
	render() {
		return (
			<div className="content-container">
				<div className="row">
					<Card
						icon={icon}
						title={'Assign opportunites to your team'}
						detail={"and always know who's working on what."}
					/>
					<Card
						icon={icon}
						title={'Sync your bid calendar '}
						detail={'to Outlook or Google Calendar with Opportunity Manager'}
					/>
					<Card
						icon={icon}
						title={'Track submitted proposals'}
						detail={"indicate if you've won or lost your submitted proposals."}
					/>
				</div>
				<div className="row">
					<Card
						icon={icon}
						title={'Assign opportunites to your team'}
						detail={"and always know who's working on what."}
					/>
					<Card
						icon={icon}
						title={'Sync your bid calendar '}
						detail={'to Outlook or Google Calendar with Opportunity Manager'}
					/>
					<Card
						icon={icon}
						title={'Track submitted proposals'}
						detail={"indicate if you've won or lost your submitted proposals."}
					/>
				</div>
			</div>
		);
	}
}

export default MidContent;
