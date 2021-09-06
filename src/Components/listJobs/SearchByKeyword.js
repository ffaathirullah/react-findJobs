import React from "react";
import "./SearchByKeyword.css";

const SearchByKeyword = () => {
  return (
    <>
      <div class="container background pt-2">
        <h6>Search by Keywords</h6>
        <input
          type="text"
          class="form-control mt-2"
          placeholder="Job Title Keyword..."
          aria-describedby="basic-addon1"
        />
        <h6 class="mt-2">Location</h6>
        <input
          type="text"
          class="form-control mt-2"
          placeholder="City or Post code"
          aria-describedby="basic-addon1"
        />
        <h6 class="mt-2">Category</h6>
        <div class="btn-group" role="group">
          <button
            id="btnGroupDrop1"
            type="button"
            class="btn btn-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              width: "16em",
              height: "2.5em",
            }}
          >
            Choose a category
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
        <h6 class="mt-2">Job Type</h6>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Free Lance
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Fulll Time
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Internship
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Part Time
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Temporary
          </label>
        </div>
        <h6 class="mt-2">Date Posted</h6>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Last Hour
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Last 7 Days
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Last 14 days
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Last 30 days
          </label>
        </div>
        <h6 class="mt-2">Category</h6>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label class="form-check-label" for="flexSwitchCheckDefault">
            Manager
          </label>
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
            checked
          />
          <label class="form-check-label" for="flexSwitchCheckChecked">
            officer
          </label>
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDisabled"
            disabled
          />
          <label class="form-check-label" for="flexSwitchCheckDisabled">
            Student
          </label>
        </div>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            id="flexSwitchCheckCheckedDisabled"
            checked
            disabled
          />
          <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">
            Esklusif
          </label>
        </div>
        <button type="button" class="btn btn-secondary">
          Find Jobs
        </button>
      </div>
    </>
  );
};

export default SearchByKeyword;
