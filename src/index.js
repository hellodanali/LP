import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import 'babel-polyfill';

import configureStore from './js/config/store';
import App from './app.js';

import es6Promise from 'es6-promise';
import 'isomorphic-fetch';

// Load SCSS
import './styles/index.scss';

es6Promise.polyfill();

const store = configureStore();

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

// Render app
render(App);

if (module.hot) {
  module.hot.accept('./app.js', () => {
    const NewClient = require('./app.js').default; // eslint-disable-line global-require

    render(NewClient);
  });
}
