import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
//***Auth0Provider for user authentication
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-x8syof15qxeo88k1.us.auth0.com"
    clientId="bixqoON1SVxZPT7oDKmI1GMj2JhyWvls"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
