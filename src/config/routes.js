import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from '../view/LandingPage/components/LandingPage';

const publicPath = '/';

export const routeCodes = {
	COMMON: publicPath,
	OTHER: `${publicPath}other`
};

export default () => (
	<Switch>
		<Route exact path={routeCodes.COMMON} component={LandingPage} />
	</Switch>
);
