import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";

import { Link } from "react-router-dom";

import logo from "../../images/logo.png";
import "./NavBar.css";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img src={logo} style={{ width: 125, height: 100 }} alt="Phazel" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/sortalgo">
                <span className="title">Sort Algorithms</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/pathfindingalgo">
                <span className="title">Pathfinding Algorithms</span>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
