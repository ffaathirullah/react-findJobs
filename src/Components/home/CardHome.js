import React, { useEffect, useState } from "react";
import { MdWork } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { MdUpdate } from "react-icons/md";
import findjobs from "../../assests/images/findjobs.jpg";
import axios from "axios";

const CardHome = (props) => {
  const [cards, setCard] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://mycorsproxy3.herokuapp.com/https://api.indeed.com/ads/apisearch?publisher=7778623931867371&format=json&v=2&co=id&q=front+end&sort=date&q=frontEnd&limit=4"
      )
      .then((res) => {
        const cards = res.data.results;
        setCard(cards);
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  }, []);

  return (
    <>
      {cards.map((card, index) => (
        <div class="row mt-2">
          <div class="col-2"></div>
          <div class="col-8 py-4  ">
            <div class="card " style={{ height: "8rem" }}>
              <div class="row">
                <div class="col d-flex">
                  <img
                    src={findjobs}
                    class="card-img-top align-self-center align-content-lg-center"
                    alt="..."
                    style={{ height: "8em" }}
                  />
                </div>
                <div class="col-10">
                  <h6 class="card-title mt-2">{card.jobtitle}</h6>
                  <div class="row">
                    <div class="col">
                      <MdWork />. {card.company}
                    </div>
                    <div class="col">
                      <SiGooglemaps />. {card.city}
                    </div>
                    <div class="col">
                      <MdUpdate />. {card.formattedRelativeTime}
                    </div>
                    <div class="col-5">Rp.20.000.000</div>
                  </div>
                  <a href="#" class="btn btn-primary mt-2">
                    Apply Jobs
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardHome;
