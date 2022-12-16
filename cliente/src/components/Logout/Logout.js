import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Nav } from "react-bootstrap";

const Logout = () => {
    const { logout } = useAuth0();
  return (
    <>
      <Nav.Link onClick={() => logout({ returnTo: window.location.origin })}>
        Cerrar sesión
      </Nav.Link>
    </>
  )
}

export default Logout