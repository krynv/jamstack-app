import React from "react";
import Link from "./Link";

const Nav = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
    <a className="navbar-brand" href="/">
      Ster Wers
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsExampleDefault"
      aria-controls="navbarsExampleDefault"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/characters">
            <a className="nav-link">Characters</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
