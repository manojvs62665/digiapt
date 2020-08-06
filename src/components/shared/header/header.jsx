import React, { Component } from "react";
import "../../style.scss";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Row } from "react-bootstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <header>
          <Navbar bg="light" expand="lg" className="nav_header">
            <Navbar.Brand href="/">
              <Row>
                <img
                  src="https://uploads-ssl.webflow.com/5ef1048d6e07c57645d70ebb/5f1a3d366c10b823b1ab9478_logo-footer%20(1).png"
                  alt="logo"
                />
                <h3 class="logo-black white">Digiapt</h3>
              </Row>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>

                <NavDropdown title="Categories" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/category_1">
                    Categories1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="category_2">
                    Categories2
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </>
    );
  }
}
