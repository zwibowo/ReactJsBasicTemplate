import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/assets/admin/Layout';
import Login from './components/auth/LayoutLogin';
import Register from './components/auth/LayoutRegister';
import LayoutGuest from './components/guest/LayoutGuest';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={LayoutGuest}/>
            <Route path="/dashboard" component={Layout}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
