import React, { Component } from 'react';
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

          {/* <div className="navbar">
            <a href="#home">Home</a>
            <a href="#poultry">Poultry</a>
            <a href="#beef">Beef</a>
            <a href="#fish">Fish</a>
            <a href="#pork">Pork</a>
            <a href="#dessert">Dessert</a>
           </div>         */}
      </div> 
    );
  }
}

export default Header;