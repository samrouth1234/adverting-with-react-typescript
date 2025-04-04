import { Navbar, Nav } from "react-bootstrap";

const MainNavbar = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="ps-5">
        <Navbar.Brand href="#home">Brand</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#courses">Courses</Nav.Link>
          <Nav.Link href="#forum">Forum</Nav.Link>
          <Nav.Link href="#blog">Blog</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default MainNavbar;