import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/poultry">Poultry</Nav.Link>
            <Nav.Link href="/beef">Beef</Nav.Link>
            <Nav.Link href="/fish">Fish</Nav.Link>
            <Nav.Link href="/pork">Pork</Nav.Link>
            <Nav.Link href="/dessert">Dessert</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
