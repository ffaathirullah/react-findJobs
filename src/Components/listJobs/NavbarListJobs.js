import React from "react";
import "../../App.css";
import ModalLoginSignUp from "../ModalLoginSignUp";
import { Link } from "react-router-dom";
// import "./navbar.css";
const NavbarListJobs = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navColor">
      <div class="container mt-4">
        <a className="navColor navbar-brand mt-1 h1" style={{ color: "#000" }}>
          Find Jobs
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class="nav-item dropdown ms-5 ms-2">
              <a
                class="nav-link dropdown-toggle active"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#000" }}
              >
                Home
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/" class="dropdown-item" href="#">
                    Action
                  </Link>
                </li>
                <li>
                  <a class="dropdown-item" href="#" style={{ color: "#000" }}>
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#" style={{ color: "#000" }}>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown  ms-3">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#000" }}
              >
                Find Jobs
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#" style={{ color: "#000" }}>
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#" style={{ color: "#000" }}>
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#" style={{ color: "#000" }}>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown  ms-3">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#000" }}
              >
                Epmloyers
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#" style={{ color: "#000" }}>
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#" style={{ color: "#000" }}>
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#" style={{ color: "#000" }}>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown  ms-3">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#000" }}
              >
                Candidates
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#" style={{ color: "#000" }}>
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#" style={{ color: "#000" }}>
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#" style={{ color: "#000" }}>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown  ms-3">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#000" }}
              >
                Blog
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#" style={{ color: "#000" }}>
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#" style={{ color: "#000" }}>
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#" style={{ color: "#000" }}>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown  ms-3">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "#000" }}
              >
                Pages
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#" style={{ color: "#000" }}>
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#" style={{ color: "#000" }}>
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#" style={{ color: "#000" }}>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <button
              type="button"
              class="btn btn-outline-light ms-5 "
              data-bs-toggle="modal"
              href="#exampleModalToggle"
              role="button"
              style={{ color: "#000" }}
            >
              Login / Register
            </button>
            <button
              type="button"
              class="btn btn-light ms-4"
              style={{ color: "#000" }}
            >
              Add Jobs
            </button>
          </ul>
        </div>
      </div>
      <ModalLoginSignUp />
    </nav>
  );
};

export default NavbarListJobs;
