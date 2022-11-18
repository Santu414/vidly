import React from "react";
import { NavLink, Link, to } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/">
        Vidly
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <NavLink class="nav-item active">
            <Link class="nav-link nav-link" to="/">
              Movies <span class="sr-only">(current)</span>
            </Link>
          </NavLink>
          <NavLink class="nav-item nav-link">
            <Link class="nav-link" to="/customers">
              Customers
            </Link>
          </NavLink>
          <NavLink class="nav-item nav-link">
            <Link class="nav-link" to="/rentals">
              Rentals
            </Link>
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
