import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Nav } from "react-bootstrap";

const Login = () => {
    const { loginWithRedirect } = useAuth0();
  return (
    <>
      <Nav.Link onClick={() => loginWithRedirect()}>
        Iniciar sesión
      </Nav.Link>
    </>
  )
}

export default Login