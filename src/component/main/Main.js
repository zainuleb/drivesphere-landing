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
        <img
          src="assets/img/logo/logo.png"
          alt="Drivesphere VR Driving Training Center Logo"
        />
      </div>
      <div className="swiper-slide bd-slider__item bd-slider__height include-bg d-flex align-items-center bg-item">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-xl-8 col-lg-8 col-md-10">
              <div className="bd-slider__content">
                <h2
                  className="bd-slider__subtitle blackhighlight"
                  data-animation="fadeInUp"
                  data-delay=".3s"
                >
                  Confident Drivers | Drivesphere VR Driving Training Center
                </h2>
                <h1
                  className="bd-slider__title"
                  data-animation="fadeInUp"
                  data-delay=".5s"
                >
                  Trained by Innovative, Data Driven Technologies
                </h1>
                <p
                  className="mainPara"
                  data-animation="fadeInUp"
                  data-delay=".7s"
                >
                  Get ready for your Driving License with Drivesphere's
                  EU-approved driving simulator training program.
                </p>
                <button
                  className="bd-slider__btn bd-btn"
                  data-animation="fadeInUp"
                  data-delay=".9s"
                  onClick={openModal}
                >
                  Subscribe now and receive your first class for FREE
                  <i className="fa-regular fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
