import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'

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
        <Routes>
          <Route exact path="/ManningLandscape" element={<Homepage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/reviews" element={<About />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
    )
  }
}

export default App;


