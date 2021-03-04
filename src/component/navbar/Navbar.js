import React from "react";
import "../../assets/css/nav.css";
export function Navbar() {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <a href="#main">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#our_projects">Our Projects</a>
        </li>
      </ul>
    </nav>
  );
}
