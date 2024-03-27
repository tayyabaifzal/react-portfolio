import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './nav.css';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-nav">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h1>TAYYABA</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-link">
              <NavLink to="/projects">PROJECTS</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
