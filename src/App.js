import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.css';

import Header from './/components/header/header.component';
import Homepage from './/pages/homepage/home.page';
import Portfolio from './/pages/portfolio/portfolio.page';
import About from './pages/about/about.page';
import Compare from './pages/compare/compare.page';
import Contact from './pages/contact/contact.page';

export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/compare" component={Compare} />
          <Route path="/reviews" component={About} />
          <Route path="/contact" component={Contact} />

        </Switch>
      </div>
    )
  }
}

export default App;


