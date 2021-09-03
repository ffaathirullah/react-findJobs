import React from "react";
import Navbar from "./../Components/Navbar";
import BreadCrimp from "./../Components/BreadCrimp";
import "../Testimonial.css";
import BottomNavContent from "./../Components/BottomNavContent";
import Footer from "./../Components/Footer";

const ListJobs = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <Navbar style={{ color: "#00000" }} />
      </div>
      <BreadCrimp />
      <BottomNavContent />
      <Footer />
    </div>
  );
};

export default ListJobs;
