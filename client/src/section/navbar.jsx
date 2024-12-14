import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import '../App.jsx';


function Navbar ({ cart }) {
    return (
        <nav className="navbar navbar-expand-lg sticky-top d-flex">
        <div className="container-md">
          <a className="navbar-brand fw-bold fst-italic fs-3" style={{color: "#ec8f5e"}} href="#">
            Wonder <span style={{color: "#f1eb90"}}>of</span> Juice
          </a>
          {/* Cart Icon */}
          <a
            className="iconcart btn text-light fs-3 cart-icon d-flex"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample">
            <FontAwesomeIcon icon={faCartShopping} />
            {cart.length > 0 && <span className="badge">{cart.length}</span>}
          </a>
          {/* Hamburger Menu */}
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-auto justify-content-center">
              <li className="nav-item">
                <a className="nav-link fs-5" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="#benefits">
                  Manfaat Jus
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="#menu">
                  Menu
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;