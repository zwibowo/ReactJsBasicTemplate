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
            <Route exact path="/" component={LayoutGuest}/>
            <Route path="/home" component={LayoutGuest}/>
            <Route exact path="/dashboard" component={Layout}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route path="/404" component={Error404}/>
            <Redirect from='*' to='/404'/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
