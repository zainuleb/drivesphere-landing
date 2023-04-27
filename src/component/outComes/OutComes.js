import React from "react";
import { Link } from "react-router-dom";

const OutComes = () => {
  return (
    <div className="bd-about-2__section pt-120 pb-90 theme-bg ">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 wow fadeInUp">
            <div className="bd-about-2__text ml-70 mb-30">
              <div className="bd-section__title-wrapper">
                <h3 className="bd-section__title bd-section__title-lg mb-25">
                  After Training at Our Driving Center, You Will:
                </h3>
                <div class="bd-section__inner-list mb-40">
                  <ul>
                    <li>
                      <span>
                        <i class="fal fa-check-circle"></i>
                      </span>
                      <b>
                        <u>Improve your driving skills</u>
                      </b>{" "}
                      at your own pace with a customized program tailored to
                      your needs.
                    </li>
                    <li>
                      <span>
                        <i class="fal fa-check-circle"></i>
                      </span>
                      <b>
                        <u>Gain confidence and experience</u>
                      </b>{" "}
                      in a safe environment, without the stress of real traffic.
                    </li>
                    <li>
                      <span>
                        <i class="fal fa-check-circle"></i>
                      </span>
                      <b>
                        <u>Learn to handle different real-life scenarios</u>
                      </b>
                      , from snow and mountain driving to heavy traffic
                      situations.
                    </li>
                    <li>
                      <span>
                        <i class="fal fa-check-circle"></i>
                      </span>
                      <b>
                        <u>
                          Significantly reduce the duration and cost of training
                          to get your driving license
                        </u>
                      </b>{" "}
                      and get your first FREE simulator class with us.
                    </li>
                    <li>
                      <span>
                        <i class="fal fa-check-circle"></i>
                      </span>
                      <b>
                        <u>Understand the importance of responsible driving</u>
                      </b>{" "}
                      and become a more conscious driver on the road.
                    </li>
                  </ul>
                </div>
                <div className="bd-section__btn-wrapper pt-30">
                  <Link to="/signUp" className="bd-btn">
                    Subscribe to get your first class for FREE
                    <span>
                      <i className="fa-regular fa-angle-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 wow fadeInUp">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="bd-about-2__img w-img mb-30">
                  <img src="assets/img/extra/image2.jpg" alt="out1.png" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="bd-about-2__img w-img mb-30">
                  <img
                    src="assets/img/extra/successBackground1.jpg"
                    alt="out2.png"
                  />
                </div>
                <div className="bd-about-2__img w-img mb-30">
                  <img src="assets/img/extra/download (1).jpg" alt="out3.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutComes;
