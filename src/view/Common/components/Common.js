import React, { Component } from 'react';
import logo from '../../../assets/img/logo.png';

class Common extends Component {
  render() {
    return (
      <div className="common_container">
        <div>
          <img src={logo} />
        </div>
      </div>
    );
  }
}

export default Common;
