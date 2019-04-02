import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { CookiesProvider, withCookies } from 'react-cookie';
import Home from './components/home';
import About from './components/about';
import Products from './components/products';
import './App.css';

class App extends Component {
  render() {
    return (
      <CookiesProvider>
        <BrowserRouter>
        <div className="App">
          <header className="header">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          </header>
        <div className="main">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        </div>
        </div>
        </BrowserRouter>
      </CookiesProvider>
    );
  }
}

export default withCookies(App);
