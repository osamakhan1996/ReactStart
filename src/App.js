import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />

      <Redirect to="/" />
      </div>
    </BrowserRouter>
  );
}

export default App;
