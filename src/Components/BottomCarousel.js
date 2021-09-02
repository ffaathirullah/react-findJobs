import React from "react";

const BottomCarousel = () => {
  return (
    <div className="containerBottomCarousel mt-4">
      <div className="pt_100"></div>
      <div>
        <h2 className="skillss text-white ">Your Dream Jobs Are Waiting</h2>
      </div>
      <div>
        <p className="skillss text-white">
          Over 1 million interactions, 50,000 success stories Make yours now.
        </p>
      </div>
      <div>
        <div class=" d-flex justify-content-center">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="button" className="btn btn-light btnSeacrh">
              Search Jobs
            </button>
            <button type="button" className="btn btn-warning ms-2 btnApply">
              Aplly Jobs Now
            </button>
          </div>
        </div>
      </div>
      <div className="pb_100"></div>
    </div>
  );
};

export default BottomCarousel;
