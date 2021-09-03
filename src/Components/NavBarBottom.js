import React from "react";
import "../App.css";
import navBarBottom from "../assests/images/navBarImage.png";

const NavBarBottom = () => {
  return (
    <div class="container mt-5 pb-5 ">
      <div className="mt_50"></div>
      <div class="row">
        <div class="col mt-5">
          <p className="paragraf">
            Find Your Perfect Job <br /> Match
          </p>
          <p className="paragraf2">
            Find Jobs, Employment & Career Opportunities
          </p>
          <div className="navBarBott" style={{ height: "6em" }}>
            <div class="row">
              <div class="col-md-5 pt-4 ps-4">
                <div class="input-group">
                  <input
                    class="form-control border-end-0 border rounded-pill"
                    type="search"
                    placeholder="search"
                    id="example-search-input"
                    style={{
                      color: "#ffff",
                      width: "11em",
                      height: "2.5em",
                      border: "4px",
                    }}
                  />
                </div>
              </div>

              <div class="col mt-4">
                <div class="btn-group" role="group">
                  <button
                    id="btnGroupDrop1"
                    type="button"
                    class="btn btn-light dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      width: "8em",
                      height: "2.5em",
                    }}
                  >
                    Pick Location
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown link
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Dropdown link
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col mt-4 me-5">
                <button
                  type="button"
                  class="btn btn-warning"
                  style={{
                    color: "#ffff",
                    width: "9em",
                    height: "3em",
                    borderRadius: "1em",
                  }}
                >
                  Find Jobs
                </button>
              </div>
            </div>
          </div>
          <p className="paragraf2">
            Popular Searches : Designer, Developer, Web , IOS, PHP , Senior,
            Engineer
          </p>
        </div>

        <div class="col ms-4">
          <img
            width="635"
            height="627"
            src="https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/04/slider2.png"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBarBottom;
