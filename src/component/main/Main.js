import React, { useState } from "react";
import Modal from "../modal/Modal";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="hero">
      {isOpen && <Modal isOpen={isOpen} close={closeModal} />}
      <div className="logo_section">
        <img src="assets/img/logo/logo.png" alt="logo.png" />
      </div>
      <div className="swiper-slide bd-slider__item bd-slider__height include-bg d-flex align-items-center bg-item">
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
                  <span className="blackhighlight">
                    Get ready for your Driving License with our EU-approved
                    driving simulator training program
                  </span>
                </p>
                <div
                  className="bd-slider__btn bd-btn"
                  data-animation="fadeInUp"
                  data-delay=".9s"
                  onClick={openModal}
                >
                  Subscribe to get your first class for FREE
                  <span>
                    <i className="fa-regular fa-angle-right"></i>
                  </span>
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
