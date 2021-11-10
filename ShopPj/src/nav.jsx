import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand ms-2" href="/#">
            Cart
            <span className="badge badge-sm bg-primary ms-3">
              {this.props.cart.length}
            </span>
          </a>
          <button
            className="navbar-toggler"
            onClick={this.toggler}
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Login <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/home">
                  Home <span className="sr-only"></span>
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/shopping">
                  Customer <span className="sr-only"></span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
