import React, { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";
import "../styles/App.css";
import vibecheck from "../assets/vibecheck.png";

const Navbar: React.FC = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  useEffect(() => {
    fetch("http://localhost:5000/auth/status", { credentials: "include" })
      .then((res) => res.json())
      .then((data) => setIsLoggedIn(data.loggedIn))
      .catch((error) => console.error("Error checking login status:", error));
  }, []);

  const handleLogout = async () => {
    // Call backend to handle logout and clear cookies
    await fetch("http://localhost:5000/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    // Update the state and UI accordingly
    setIsLoggedIn(false); // Update the logged-in state
    window.location.reload(); // Refresh the page to reflect the changes
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">

      <div className="navbar-brand" >
        <a className="navbar-item-img on-hover" href="/" >
          <img src={vibecheck} alt="VibeCheck"/>
        </a>

        <a
          role="button"
          className={`navbar-burger ${isBurgerActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={isBurgerActive ? "true" : "false"}
          onClick={toggleBurgerMenu}
          >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${isBurgerActive ? "is-active" : ""}`}
        >
        
        <div
          className={`navbar-start ${
            isBurgerActive ? "" : "is-flex is-justify-content-center is-align-items-center"
          }`}
          style={{ flex: 1 }}
          >
          
          <a className="navbar-item" href="/">
            Home
          </a>

          <a className="navbar-item" href="/documentation">
            Documentation
          </a>
          <a className="navbar-item" href="#">
            More
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
          <div className="buttons">
                {isLoggedIn ? (
                  <button className="button is-light" onClick={handleLogout}>
                    Log out
                  </button>
                ) : (
                  <a className="button is-primary" href="http://localhost:5000/auth/login">
                    Log in with Spotify
                  </a>
                )}
              </div>
          </div>
        </div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;