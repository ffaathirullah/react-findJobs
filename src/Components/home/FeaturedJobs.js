import React from "react";
import "./FeaturedJobs.css";
import CardHome from "./CardHome";

const FeaturedJobs = () => {
  return (
    <div class="container-fluid pt-4 background">
      <p class="h2 d-flex justify-content-center ">Featured Jobs</p>
      <p class="d-flex justify-content-center ">
        Know your worth and find the job that qualify your life
      </p>
      <CardHome />
    </div>
  );
};

export default FeaturedJobs;
