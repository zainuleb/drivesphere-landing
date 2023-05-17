import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="hero">
      <div className="logo_section">
        <img src="assets/img/logo/logo.png" alt="logo.png" />
      </div>
      <div
        className="swiper-slide bd-slider__item bd-slider__height include-bg d-flex align-items-center bg-item"
        // style={{
        //   backgroundImage: "url(assets/img/extra/manDriving.png)",
        //   backgroundSize: "65em 75em",
        //   backgroundPosition: "36rem -9rem",
        //   backgroundRepeat:
        //     "no-repeat" /* prevent the background from repeating */,
        //   width: "100%" /* set the width to fill the container */,
        //   height: "100%" /* set the height to fill the container */,
        //   position: "relative" /* make the item position relative */,
        // }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-8 col-lg-8 col-md-10">
              <div className="bd-slider__content">
                <span
                  className="bd-slider__subtitle blackhighlight"
                  data-animation="fadeInUp"
                  data-delay=".3s"
                >
                  Confident Drivers
                </span>
                <h5
                  className="bd-slider__title "
                  data-animation="fadeInUp"
                  data-delay=".5s"
                >
                  <span className="blackhighlight">
                    Trained by Innovative, Data Driven Technologies
                  </span>
                </h5>

                <p
                  className="mainPara"
                  data-animation="fadeInUp"
                  data-delay=".7s"
                >
                  Get ready for your Driving License with our EU-approved
                  driving simulator training program
                </p>
                <div
                  className="bd-slider__btn"
                  data-animation="fadeInUp"
                  data-delay=".9s"
                >
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
        </div>
      </div>
    </div>
  );
};

export default Main;
