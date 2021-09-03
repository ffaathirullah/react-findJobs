import React from "react";
import Card from "./Card";

const BottomNavContent = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col">Column</div>

        <div class="col-9">
          <div class="row">
            <div class="col-8" style={{ marginTop: "1.9rem" }}>
              <p>Showing 1 – 10 of 16 results</p>
            </div>
            <div class="col-2">
              <div class="col mt-4">
                <div class="btn-group" role="group">
                  <button
                    id="btnGroupDrop1"
                    type="button"
                    class="btn btn-light dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      width: "9em",
                      height: "2.5em",
                    }}
                  >
                    Sort By (Default)
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
            </div>
            <div class="col-2">
              <div class="col mt-4">
                <div class="btn-group" role="group">
                  <button
                    id="btnGroupDrop1"
                    type="button"
                    class="btn btn-light dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      width: "9em",
                      height: "2.5em",
                    }}
                  >
                    12 per Page
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
            </div>
          </div>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default BottomNavContent;
