import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Header extends Component {
  dashboardClick = () => {
    this.props.history.push('/dashboard');
  }
  loginClick = () => {
    this.props.history.push('/login');
  }
  render() {
    return(
      <ul>
        <li><Link to={'home'}>Home</Link></li>
        <li><Link to={'about'}>About</Link></li>
        <li><Link to={'contact'}>Contact</Link></li>
        <li><Link to={'dashboard'} onClick={this.dashboardClick}>Dashboard</Link></li>
        <li><Link to={'login'} onClick={this.loginClick}>Login</Link></li>
      </ul>
    );
  }
}

export default withRouter(Header);
