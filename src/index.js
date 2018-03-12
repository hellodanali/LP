import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import 'babel-polyfill';

import App from './view/index.js';

// Load SCSS
import './index.scss';

const render = Component => {
	ReactDOM.render(
		<AppContainer>
			<BrowserRouter>
				<Component />
			</BrowserRouter>
		</AppContainer>,
		document.getElementById('root')
	);
};

// Render app
render(App);

if (module.hot) {
	module.hot.accept('./view/', () => {
		const NewClient = require('./view/index.js').default;

		render(NewClient);
	});
}
