import React, { useState } from "react";
import Modal from "../modal/Modal";

const Membership = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div className="svg_div"></div>
      <div className="bd-portfolio__section pt-90 pb-60">
        {isOpen && <Modal isOpen={isOpen} close={closeModal} />}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bd-section__title-wrapper text-center mb-120 wow fadeInUp">
                <h3 className="bd-section__title membership_title bd-title-border">
                  This is how the <strong>DriveSphere Membership</strong> works:
                </h3>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5">
              <div className="bd-portfolio__img w-img mr-70 mb-60 wow fadeInUp">
                <img src="assets/img/extra/2968290.jpg" alt="mem1.jpg" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bd-portfolio__text mb-60 wow fadeInUp">
                <div className="bd-section__title-wrapper">
                  <span className="bd-section__subtitle bd-section__subtitle-lg mb-10">
                    Step 1
                  </span>
                  <h3 className="bd-section__title bd-section__title-lg mb-25">
                    Sign up today for our FREE DriveSphere Membership program.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5 order-2 order-lg-1">
              <div className="bd-portfolio__text mr-50 mb-60 wow fadeInUp">
                <div className="bd-section__title-wrapper">
                  <span className="bd-section__subtitle bd-section__subtitle-lg mb-10">
                    Step 2
                  </span>
                  <h3 className="bd-section__title bd-section__title-lg mb-25">
                    Pick a membership that suits your needs, whether you're a
                    beginner or just want to improve your driving skills.
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-5 order-1 order-lg-2">
              <div className="bd-portfolio__img w-img ml-50 mb-60 wow fadeInUp">
                <img
                  src="assets/img/extra/Driving-illustration.png"
                  alt="mem2.jpg"
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5">
              <div className="bd-portfolio__img w-img mr-70 mb-60 wow fadeInUp">
                <img src="assets/img/extra/4170025.jpg" alt="mem3.jpg" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bd-portfolio__text mb-60">
                <div className="bd-section__title-wrapper wow fadeInUp">
                  <span className="bd-section__subtitle bd-section__subtitle-lg mb-10">
                    Step 3
                  </span>
                  <h3 className="bd-section__title bd-section__title-lg mb-25">
                    Attend your FREE personalized simulator-based training
                    session with expert instruction.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-5 order-2 order-lg-1">
                <div className="bd-portfolio__text mr-50 mb-60 wow fadeInUp">
                  <div className="bd-section__title-wrapper">
                    <span className="bd-section__subtitle bd-section__subtitle-lg mb-10">
                      Step 4
                    </span>
                    <h3 className="bd-section__title bd-section__title-lg mb-25">
                      If you decide to continue your training, simply pay for
                      your chosen plan, with the flexibility to change it later
                      on.
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 order-1 order-lg-2">
                <div className="bd-portfolio__img w-img ml-50 mb-60 wow fadeInUp">
                  <img src="assets/img/extra/17555.jpg" alt="mem4.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5">
              <div className="bd-portfolio__img w-img mr-70 mb-60 wow fadeInUp">
                <img src="assets/img/extra/offer.png" alt="mem5.jpg" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bd-portfolio__text mb-60">
                <div className="bd-section__title-wrapper wow fadeInUp">
                  <span className="bd-section__subtitle bd-section__subtitle-lg mb-10">
                    Step 5
                  </span>
                  <h3 className="bd-section__title bd-section__title-lg mb-25">
                    Benefit from flexible scheduling, lower training expenses,
                    and a faster path to earning your driver's license.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <div
                className="bd-slider__btn"
                data-animation="fadeInUp"
                data-delay=".9s"
              >
                <button onClick={openModal} className="bd-btn-member">
                  Subscribe to get your first class for FREE
                  <span>
                    <i className="fa-regular fa-angle-right"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Membership;
