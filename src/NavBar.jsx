import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => (
  <Navbar expand="md" className="custom-navbar">
    <Container>
      <Navbar.Brand as={Link} to="/">
        Cancer Awareness Run 2025
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="main-navbar" />
      <Navbar.Collapse id="main-navbar">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
          <Nav.Link as={Link} to="/about">About Us</Nav.Link>
          <Nav.Link as={Link} to="/mission">Our Mission</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
