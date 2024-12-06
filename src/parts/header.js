import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li>
                <Link class="navbar-brand" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link class="navbar-brand" to="/Card">
                  Faculty
                </Link>
              </li><li>
                <Link class="navbar-brand" to="/">
                  Student
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
