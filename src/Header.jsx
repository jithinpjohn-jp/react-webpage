import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ fontSize: "25px", color: "rgba(131, 169, 215, 1)" }}
          className="fw-bold"
        >
          React
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Link
            style={{ textDecoration: "none" }}
            className="text-light "
            to={"/"}
          >
            Home
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            className="text-light ms-3"
            to={"/about"}
          >
            About
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            className="text-light ms-3"
            to={"/features"}
          >
            Features
          </Link>
          <Link style={{ textDecoration: "none" }} className="text-light ms-3">
            {" "}
            <Nav>
              <NavDropdown
                id="nav-dropdown-white-example"
                title="Login"
                menuVariant="white"
                style={{ position: "relative", top: "-8px" }}
              >
                <NavDropdown.Item href="#action/3.1">Sign in</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Login in</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">End</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
