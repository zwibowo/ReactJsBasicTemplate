import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Index from './Index';
import About from './About';
import Contact from './Contact';

export default class LayoutGuest extends Component {
  render() {
    return(
      <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/home" component={Index} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer/>
      </div>
    );
  }
}
