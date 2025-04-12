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
    await fetch("http://localhost:5000/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <nav className="navbar is-spaced" role="navigation" aria-label="main navigation">
      {/* BRAND: Logo and Burger */}
      <div className="navbar-brand">
        {/* Logo */}
        <a className="navbar-item" href="/" style={{ maxWidth: "200px", width: "200px", maxHeight: "200px", height: "200px", pointerEvents: "none" }}>
          <img src={vibecheck} alt="VibeCheck" style={{ maxHeight: "80px", width: "80px", height: "80px" }} />
        </a>

        {/* Burger icon */}
        <a
          role="button"
          className={`navbar-burger ${isBurgerActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={isBurgerActive ? "true" : "false"}
          data-target="navbarMenu"
          onClick={toggleBurgerMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      {/* MENU: Links and buttons */}
      <div id="navbarMenu" className={`navbar-menu ${isBurgerActive ? "is-active" : ""}`}>
        {/* Centered Nav Links for Desktop */}
        <div className="navbar-start is-flex-grow-1 is-justify-content-center">
          <a className="navbar-item" href="/">Home</a>
          <a className="navbar-item" href="/documentation">Features</a>
          <a className="navbar-item" href="#">Who am i?</a>
        </div>

        {/* Right Spacer: Buttons */}
        <div className="navbar-end" style={{ maxWidth: "200px", width: "200px" }}>
          <div className="navbar-item">
            <div className="buttons is-flex is-justify-content-center">
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
    </nav>
  );
};

export default Navbar;