import React from "react";

const Footer = () => {
  return (
    <div className="bd-slider__section">
      <div className="bd-slider__active bd-slider__wrapper swiper-container">
        <div className="swiper-wrapper">
          <div
            className="swiper-slide bd-slider__item bd-slider__height include-bg d-flex align-items-center"
            data-background="assets/img/slider/slider-6.jpg"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                  <div className="bd-slider__content">
                    <span
                      className="bd-slider__subtitle"
                      data-animation="fadeInUp"
                      data-delay=".3s"
                    >
                      READY TO GET FIT FOR YOUR DRIVING LICENSE ?
                    </span>
                    <h3
                      className="bd-slider__title"
                      data-animation="fadeInUp"
                      data-delay=".5s"
                    >
                      Get your membership free
                    </h3>
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
          <div
            className="swiper-slide bd-slider__item bd-slider__height include-bg d-flex align-items-center"
            data-background="assets/img/slider/slider-7.jpg"
          >
            <div className="container">
              <div className="row  justify-content-center">
                <div className="col-md-8">
                  <div className="bd-slider__content text-center">
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
                      Clean Simple <br />& Minimal
                    </h3>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
