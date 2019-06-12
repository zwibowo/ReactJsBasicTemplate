import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

import Index from './../../admin/Index';
import IndexAgama from './../../admin/agama/Index';
import IndexProfile from './../../admin/profile/Index';

class Layout extends Component {
  render() {
    return (
      <div id="wrapper">
          <Sidebar />
          <div id="page-wrapper" className="gray-bg">
            <Header />
            <Switch>
              <Route path="/dashboard" component={Index}/>
              <Route path="/agama" component={IndexAgama}/>
              <Route path="/profile" component={IndexProfile}/>
            </Switch>
            <Footer />
          </div>
      </div>
    );
  }
}

export default Layout;
