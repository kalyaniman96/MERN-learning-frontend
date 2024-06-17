import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logoImage from "../Assets/logo.png";
//*** useAuth0 hook for user authentication
import { useAuth0 } from "@auth0/auth0-react";
//toastify for notification

const Header = ({ notify }) => {
  // const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  // Retrieve isAuthenticated value from localStorage
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log("Is Authenticated:", isAuthenticated);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user ID");
    navigate("/");
  };

  // Redirect user using Auth0 after login
  // useEffect(() => {
  //   if (isAuthenticated) {
  //     notify("Login successful");
  //     navigate("/profile");
  //     const token = localStorage.setItem("token", "123abc");
  //   } else {
  //     localStorage.clear("token");
  //   }
  // }, [isAuthenticated]);

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link to="/">
            <img src={logoImage} style={{ height: "50px", width: "50px" }} />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  <Link className="link" to="/">
                    Home
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link className="link" to="/about">
                    About Us
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link className="link" to="/contact">
                    Contact Us
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link className="link" to="/formdata">
                    Form Data
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link className="link" to="/services">
                    Services
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link className="link" to="/pikapika">
                    PikaPika
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link className="link" to="/pokemons">
                    All Pokemons
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link className="link" to="/pokeservice">
                    Poke Service
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link
                    className="link"
                    to="/profile"
                    hidden={!isAuthenticated}
                  >
                    My Profile
                  </Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link className="link" to="/users">
                    All users
                  </Link>
                </a>
              </li>
            </ul>
            {/* {isAuthenticated && (
              <div style={{ paddingTop: "10px", marginRight: "10px" }}>
                <p style={{ color: "green" }}>{`Welcome ${user.nickname}`}</p>
              </div>
            )} */}
            {isAuthenticated ? (
              <button
                className="btn btn-warning"
                onClick={() => {
                  handleLogout();
                  notify("Logout successful");
                }}
              >
                Log Out
              </button>
            ) : (
              <button
                className="btn btn-success"
                style={{ backgroundColor: "blueviolet" }}
                onClick={handleLogin}
              >
                Log In
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
