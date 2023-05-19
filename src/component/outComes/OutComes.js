import React, { useState } from "react";
import Modal from "../modal/Modal";

const OutComes = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="bd-about-2__section theme-bg ">
      {isOpen && <Modal isOpen={isOpen} close={closeModal} />}
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
                      </b>
                      &nbsp; at your own pace with a customized program tailored
                      to your needs.
                    </li>
                    <li>
                      <span>
                        <i class="fal fa-check-circle"></i>
                      </span>
                      <b>
                        <u>Gain confidence and experience</u>
                      </b>
                      &nbsp; in a safe environment, without the stress of real
                      traffic.
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
                      </b>
                      &nbsp; and get your first FREE simulator class with us.
                    </li>
                    <li>
                      <span>
                        <i class="fal fa-check-circle"></i>
                      </span>
                      <b>
                        <u>Understand the importance of responsible driving</u>
                      </b>
                      &nbsp; and become a more conscious driver on the road.
                    </li>
                  </ul>
                </div>
                <div className="bd-section__btn-wrapper pt-30">
                  <button onClick={openModal} className="bd-btn">
                    Subscribe to get your first class for FREE
                    <span>
                      <i className="fa-regular fa-angle-right"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 wow fadeInUp">
            <div className="row justify-content-end">
              <div className="col-lg-10 col-md-12">
                <div className="bd-about-2__img w-img mb-30">
                  <img src="assets/img/extra/image2.jpeg" alt="out1.png" />
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
