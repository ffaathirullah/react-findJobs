import React from "react";
import { MdWork } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";

const Card = () => {
  return (
    <div class="card mt-4" style={{ height: "10rem" }}>
      <div class="row">
        <div class="col d-flex">
          {" "}
          <img
            src="https://ds393qgzrxwzn.cloudfront.net/resize/m500x500/cat1/img/images/0/e41OedVZYV.jpg"
            class="card-img-top align-self-center align-content-lg-center"
            alt="..."
            style={{ width: "8em", height: "8em" }}
          />
        </div>
        <div class="col-10">
          {" "}
          <h6 class="card-title">Senior Product Design</h6>
          <div class="row">
            <div class="col">
              <MdWork />. Design
            </div>
            <div class="col">
              <SiGooglemaps />. NewYork
            </div>
            <div class="col-5">Rp.20.000.000</div>
          </div>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
