import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-ilv63mwp8imskee8.us.auth0.com"
    clientId="fbROFzOMMMiGIobnSuy0mhxUiKrXCfTc"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
);
