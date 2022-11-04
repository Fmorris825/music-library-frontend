import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar id="navbar" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">
          <h2>Fred's Digital Ipod</h2>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
