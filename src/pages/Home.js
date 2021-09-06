import "../App.css";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/home/Navbar";
import NavBarBottom from "../Components/home/NavBarBottom";
import MyPaper from "../Components/home/Paper";
import BottomCarousel from "../Components/home/BottomCarousel";
import Testimonial from "../Components/home/Carousel";
import Footer from "../Components/Footer";
import FeaturedJobs from "./../Components/home/FeaturedJobs";
import axios from "axios";
import { withRouter } from "react-router";
import { useHistory } from "react-router-dom";

const Home = () => {
  const [cards, setCard] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get(
        "https://mycorsproxy3.herokuapp.com/https://loker-api.vercel.app/api/job"
      )
      .then((res) => {
        const cards = res.data.data.jobs;
        setCard(cards);
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }, []);

  const image_url =
    "https://apusthemes.com/wp-demo/superio/wp-content/uploads/2021/04/bg-slider2.jpg";
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image_url})`,
          backgroundColor: "#302EA7",
        }}
      >
        <Navbar />
        <NavBarBottom />
      </div>
      <MyPaper />
      <FeaturedJobs />
      <BottomCarousel />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
