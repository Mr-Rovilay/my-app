import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <>
        <header class="header">
          <Link to="/" class="logo">
            Utiva<span>web</span>
          </Link>
          <i class="bx bx-menu" id="menu-icon"></i>
          <nav class="navbar">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Article">Article</Link>
          </nav>
        </header>
        <br />
      </>
    </div>
  );
}

export default Navbar;
