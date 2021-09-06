import React from "react";
import NavbarListJobs from "../Components/listJobs/NavbarListJobs";
import BreadCrimp from "../Components/listJobs/BreadCrump";
import BottomNavContent from "../Components/listJobs/BottomNavContent";
import Footer from "../Components/Footer";

const ListJobs = () => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <NavbarListJobs />
      </div>
      <BreadCrimp />
      <BottomNavContent />
      <Footer />
    </div>
  );
};

export default ListJobs;
