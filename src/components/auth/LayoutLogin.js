import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LayoutLogin extends Component {
  render() {
    return(
      <div>
        ini halaman login
        <br />
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'register'}>Register</Link></li>
          <li><Link to={'dashboard'}>Dashboard</Link></li>
        </ul>
      </div>
    );
  }
}
