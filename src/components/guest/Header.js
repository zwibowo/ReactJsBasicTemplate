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
      <div>
        <div className="row border-bottom white-bg">
        <nav className="navbar navbar-static-top" role="navigation">
            <div className="navbar-header">
                <button aria-controls="navbar" aria-expanded="false" data-target="#navbar" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                    <i className="fa fa-reorder"></i>
                </button>
                <Link to={"/"} className="navbar-brand">Inspinia</Link>
            </div>
            <div className="navbar-collapse collapse" id="navbar">
                <ul className="nav navbar-nav">
                    <li className="dropdown">
                        <a aria-expanded="false" role="button" href="/#" className="dropdown-toggle" data-toggle="dropdown"> Menu <span className="caret"></span></a>
                        <ul role="menu" className="dropdown-menu">
                            <li><Link to={"/contact"}>Contact</Link></li>
                            <li><Link to={"/about"}>About</Link></li>
                        </ul>
                    </li>
                    <li><Link to={"/dashboard"}>Dashboard</Link></li>
                </ul>
                <ul className="nav navbar-top-links navbar-right">
                  <li>
                    <Link to={"/login"}>
                      <i className="fa fa-sign-in"></i> Login
                    </Link>
                  </li>
                </ul>
            </div>
        </nav>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
