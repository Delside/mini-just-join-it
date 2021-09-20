import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";

function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Mini Just Join IT</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Java</Nav.Link>
        <Nav.Link href="#link">PHP</Nav.Link>
        <Nav.Link href="#link">Ruby</Nav.Link>
      </Nav>
    </Navbar.Collapse>
</Navbar>
    );
}

export default NavigationBar;