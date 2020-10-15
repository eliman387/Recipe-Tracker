import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/recipes/poultry">Poultry</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/recipes/pork">Pork</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/recipes/fish">Fish</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/recipes/beef">Beef</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/recipes/dessert">Dessert</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/form">Add Recipe</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
