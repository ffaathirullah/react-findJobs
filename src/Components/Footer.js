import React from "react";
import "../App.css";
import { faHome, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div class="container-fluid" style={{ padding: "0px" }}>
      <div className="mt_50"></div>
      <footer
        class="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1c2331" }}
      >
        <section
          class="d-flex justify-content-between p-4"
          style={{ backgroundColor: "#6351ce" }}
        >
          <div class="me-5">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" class="text-white me-4">
              <FaFacebook />
            </a>
            <a href="" class="text-white me-4">
              <FaTwitter />
            </a>
            <a href="" class="text-white me-4">
              <FaInstagram />
            </a>
            <a href="" class="text-white me-4">
              <FaLinkedin />
            </a>
            <a href="" class="text-white me-4">
              <FaGithub />
            </a>
            <a href="" class="text-white me-4">
              <FaYoutube />
            </a>
          </div>
        </section>

        <section class="">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">PT Dzawani Technology</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  PT Dzawani Teknologi Indonesia adalah salah satu perusahaan
                  teknologi informasi yang bergerak dalam pengembangan
                  infrastruktur teknologi, Transformasi Smart Digital Media ,
                  Konsultan & Sistem Integrator Teknologi untuk Masa Depan
                </p>
              </div>

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Products</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="#!" class="text-white">
                    Product 1
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white">
                    Product 2
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white">
                    Product 3
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white">
                    Product 4
                  </a>
                </p>
              </div>

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold">Useful links</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="#!" class="text-white">
                    link 1
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white">
                    link 2
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white">
                    link 3
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-white">
                    link 4
                  </a>
                </p>
              </div>

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 class="text-uppercase fw-bold">Contact</h6>
                <hr
                  class="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <FontAwesomeIcon icon={faHome} />. Jl. Buah Batu Regency,
                  Kujangsari, Kec. Bandung Kidul, Kota Bandung, Jawa Barat
                  40287Bandung
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} />. info@example.com
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} /> +62 821 186 472 26
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          class="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2021 Copyright:
          <a class="text-white" href="#">
            PT Dzawani Technology
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
