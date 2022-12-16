import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

function Mynav() {
  const { isAuthenticated } = useAuth0();
  return (
    <>
      <div>
        <Navbar className="Navbar_container">
          <Container className="justify-content-center">
            <Navbar.Brand>
              <img
                src="https://www.afa.com.ar/img/site/b35d6a5887e156ac79c582cb88cfedc0.gif"
                width="70"
                height="70"
                className="d-inline-block align-top"
                alt="Afalogo"
              />
            </Navbar.Brand>
          </Container>
        </Navbar>
        <div>
          <Nav className="justify-content-center" bg="light" activeKey="/home">
            {["lg"].map((expand) => (
              <Navbar key={expand} expand={expand}>
                <Container fluid>
                  <Navbar.Toggle
                    aria-controls={`offcanvasNavbar-expand-${expand}`}
                  />
                  <Navbar.Offcanvas>
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title
                        id={`offcanvasNavbarLabel-expand-${expand}`}
                      >
                        <Navbar.Brand>
                          <img
                            src="https://seeklogo.com/images/A/AFA-logo-880CB44C4B-seeklogo.com.jpg"
                            width="70"
                            height="70"
                            className="d-inline-block align-top"
                            alt="Afalogo"
                          />
                        </Navbar.Brand>
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Navbar.Collapse id="basic-navbar-nav">
                          <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">
                              Menu
                            </Nav.Link>
                            <Nav.Link as={Link} to="/Matchdata">
                              Datos del partido
                            </Nav.Link>
                            <Nav.Link as={Link} to="/List">
                              Listado de convocados
                            </Nav.Link>
                            {isAuthenticated ? (
                              <>
                               <Logout />
                              </>
                            ) : (
                              <Login />
                            )}
                            
                            
                          </Nav>
                        </Navbar.Collapse>
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            ))}
          </Nav>
        </div>
      </div>
    </>
  );
}

export default Mynav;
