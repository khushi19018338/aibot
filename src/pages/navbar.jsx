import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-logo">Tricky.AI</div>
        <ul className="nav-links">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/chat" className="nav-link">Chat</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/signup" className="auth-btn">Sign Up / Sign In</Link></li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
