import React, { Component } from 'react';
import * as Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.png';

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <img src={logo}
            alt="logo"
            width="150"
            height="150"
          />
          <h1>Welcome to Recipe Finder Cookbook</h1>
        </header>

          <div className="navbar">
            <a>Home</a>
            <a>Poultry</a>
            <a>Beef</a>
            <a>Fish</a>
            <a>Pork</a>
            <a>Dessert</a>
          </div>
      </div> 

    );
  }
}

export default Header;