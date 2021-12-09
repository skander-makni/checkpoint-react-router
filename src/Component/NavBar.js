import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>

          <Nav className="me-auto">
            <NavLink to="/" className="navlink" activeClassName="selectedlink">
              Home
            </NavLink>
            <NavLink
              to="/MovieList"
              className="navlink"
              activeClassName="selectedlink"
            >
              Movies
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
