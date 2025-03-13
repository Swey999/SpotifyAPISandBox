import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
        <img src={logo} alt="Logo" width="112" height="28" />
          <Link to="/" className="navbar-item">
            CodeAnalyzer
          </Link>
        </div>
        <div>
            
        
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
