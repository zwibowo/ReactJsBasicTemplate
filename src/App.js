import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/assets/admin/Layout';
import Login from './components/auth/LayoutLogin';
import Register from './components/auth/LayoutRegister';
import Error404 from './components/errors/Error404';
import LayoutGuest from './components/guest/LayoutGuest';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/dashboard" component={Layout}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/404" component={Error404}/>
            <Route path="/" component={LayoutGuest}/>
            <Redirect from='*' to='/404'/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
