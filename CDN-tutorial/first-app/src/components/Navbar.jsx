import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="">
        <nav className="navbar text-white navbar-expand-lg navbar-dark bg-dark">
          <button
            className="navbar-toggler ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <h3 className="navbar-brand m-2">LOGO</h3>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-collapse navbar-nav">
              <li className="navbar-item m-2">
                <Link className="link active" to="/">
                  Home
                </Link>
              </li>
              <li className="navbar-item m-2">
                <Link className="link active" to="/product">
                  Product
                </Link>
              </li>
              <li className="navbar-item m-2">
                <Link className="link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
