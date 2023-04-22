import React from "react";

const Main = () => {
  return (
    <div>
      <div className="bd-slider__section">
        <div className="bd-slider__active bd-slider__wrapper swiper-container">
          <div className="swiper-wrapper">
            <div
              className="swiper-slide bd-slider__item bd-slider__height include-bg d-flex align-items-center bg-item"
              style={{
                backgroundImage: "url(assets/img/extra/manDriving.png)",
                backgroundSize: "contain",
                backgroundPosition: "40rem -7rem",
                backgroundRepeat:
                  "no-repeat" /* prevent the background from repeating */,
                width: "100%" /* set the width to fill the container */,
                height: "100%" /* set the height to fill the container */,
                position: "relative" /* make the item position relative */,
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-8 col-lg-8 col-md-10">
                    <div className="bd-slider__content">
                      <span
                        className="bd-slider__subtitle"
                        data-animation="fadeInUp"
                        data-delay=".3s"
                      >
                        Confident Drivers
                      </span>
                      <h5
                        className="bd-slider__title"
                        data-animation="fadeInUp"
                        data-delay=".5s"
                      >
                        Trained by Innovative, Data Driven Technologies
                      </h5>
                      <p
                        className="mainPara"
                        data-animation="fadeInUp"
                        data-delay=".7s"
                      >
                        Join our EU-Complaint training program and prepare for
                        your EU Digital Driver License Safer and Faster
                      </p>
                      <div
                        className="bd-slider__btn"
                        data-animation="fadeInUp"
                        data-delay=".9s"
                      >
                        <a href="about.html" className="bd-btn">
                          Sign Up
                          <span>
                            <i className="fa-regular fa-angle-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div
              className="swiper-slide bd-slider__item bd-slider__height include-bg d-flex align-items-center"
              data-background="assets/img/extra/manDriving.png"
            >
              <div className="container">
                <div className="row">
                  <div className="col-xxl-6 col-xl-8 col-lg-8 col-md-10">
                    <div className="bd-slider__content">
                      <span
                        className="bd-slider__subtitle"
                        data-animation="fadeInUp"
                        data-delay=".3s"
                      >
                        We are creative inc.
                      </span>
                      <h3
                        className="bd-slider__title"
                        data-animation="fadeInUp"
                        data-delay=".5s"
                      >
                        Clean Simple & Minimal
                      </h3>
                      <p data-animation="fadeInUp" data-delay=".7s">
                        Lorem ipsum dolor sit amet consmod tempor
                      </p>
                      <div
                        className="bd-slider__btn"
                        data-animation="fadeInUp"
                        data-delay=".9s"
                      >
                        <a href="about.html" className="bd-btn">
                          Read More
                          <span>
                            <i className="fa-regular fa-angle-right"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
