import React, { Component } from 'react';
import Routes from '../config/routes.js';

export default class App extends Component {
  render() {
    return (
      <div className="root">
        <div className="page">
          <Routes />
        </div>
      </div>
    );
  }
}
