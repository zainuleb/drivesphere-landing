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
    <div className="bd-about-2__section theme-bg">
      {isOpen && <Modal isOpen={isOpen} close={closeModal} />}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 wow fadeInUp">
            <div className="bd-about-2__text ml-70 mb-30">
              <div className="bd-section__title-wrapper">
                <h2 className="bd-section__title bd-section__title-lg mb-25">
                  Enhance Your Driving Skills at Our Training Center
                </h2>
                <ul className="bd-section__inner-list mb-40">
                  <li>
                    <i className="fal fa-check-circle"></i>
                    <strong>Improve your driving skills:</strong> With our
                    customized training programs, you can enhance your driving
                    abilities at your own pace.
                  </li>
                  <li>
                    <i className="fal fa-check-circle"></i>
                    <strong>Gain confidence and experience:</strong> Our safe
                    environment allows you to build confidence and experience
                    without the stress of real traffic.
                  </li>
                  <li>
                    <i className="fal fa-check-circle"></i>
                    <strong>Handle different real-life scenarios:</strong> From
                    snow and mountain driving to heavy traffic situations,
                    you'll learn to navigate various driving scenarios.
                  </li>
                  <li>
                    <i className="fal fa-check-circle"></i>
                    <strong>Reduce training duration and cost:</strong> By
                    training with us, you can significantly reduce the time and
                    cost involved in obtaining your driving license. Get your
                    first simulator class for FREE.
                  </li>
                  <li>
                    <i className="fal fa-check-circle"></i>
                    <strong>Emphasize responsible driving:</strong> We help you
                    understand the importance of responsible driving, making you
                    a more conscious driver on the road.
                  </li>
                </ul>
                <div className="bd-section__btn-wrapper pt-30">
                  <button onClick={openModal} className="bd-btn">
                    Subscribe now and receive your first class for FREE
                    <i className="fa-regular fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp">
            <div className="row justify-content-end">
              <div className="col-lg-10 col-md-12">
                <div className="bd-about-2__img w-img mb-30">
                  <img
                    src="assets/img/extra/image2.jpeg"
                    alt="Image of Driving Training"
                  />
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
