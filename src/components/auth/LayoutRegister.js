import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LayoutRegister extends Component {
  render() {
    return(
      <div>
        ini halaman register
        <br />
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'login'}>Login</Link></li>
            <li><Link to={'dashboard'}>Dashboard</Link></li>
          </ul>
      </div>
    );
  }
}
