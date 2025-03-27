import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import "../styles/App.css";
import vibecheck from "../assets/vibecheck.png";

const Navbar: React.FC = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerActive(!isBurgerActive);
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
              <a className="button" href="/signup">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light" href="/login">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;