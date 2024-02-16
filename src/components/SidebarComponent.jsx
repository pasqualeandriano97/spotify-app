import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <Container className="col col-2">
      <Navbar
        expand="md"
        fixed="left"
        className="justify-content-between  fixed-left"
        id="sidebar"
      >
        <Container
          className="flex-column align-items-start"
          style={{ width: "auto" }}
        >
          <Navbar.Brand href="index.html">
            <img
              src="/src/assets/logo/logo.png"
              alt="Spotify Logo"
              width="131"
              height="40"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
          <Navbar.Collapse id="navbarNavAltMarkup">
            <Nav className="navbar-nav">
              <ul>
                <li>
                  <Link
                    to={"/"}
                    className="nav-item nav-link d-flex align-items-center"
                  >
                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/favourite"}
                    className="nav-item nav-link d-flex align-items-center"
                  >
                    <i className="bi bi-book-fill"></i>&nbsp; Your Library
                  </Link>
                </li>
                <li>
                  <Form className="input-group mt-3">
                    <FormControl
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <Button
                      variant="outline-secondary"
                      className="btn-sm h-100"
                    >
                      GO
                    </Button>
                  </Form>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn">
          <Button className="btn signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="btn login-btn" type="button">
            Login
          </Button>
          <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
        </div>
      </Navbar>
    </Container>
  );
}

export default Sidebar;
