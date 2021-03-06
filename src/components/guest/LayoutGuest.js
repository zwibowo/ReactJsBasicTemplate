import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Index from './Index';
import About from './About';
import Contact from './Contact';

export default class LayoutGuest extends Component {
  componentDidMount() {
    document.body.classList.add("top-navigation");
  }
  componentWillUnmount() {
    document.body.classList.remove("top-navigation");
  }
  render() {
    return(
      <div id="page-wrapper" className="gray-bg">
          <Header />
          <Switch>
            <Route path="/home" component={Index} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Index} />
          </Switch>
          <Footer/>
      </div>
    );
  }
}
