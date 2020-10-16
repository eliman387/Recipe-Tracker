import React, { Component } from "react";
import logo from "../logo.png";
import "../App.css"

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <img
            id="header-img"
            src={logo} alt="logo" width="150" height="150" />
          <h1>Recipe Finder Cookbook</h1>
        </header>
      </div>
    );
  }
}

export default Header;
