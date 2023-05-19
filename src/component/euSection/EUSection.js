import React, { useState } from "react";
import Modal from "../modal/Modal";

const EUSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="bd-cta__section primary-bg pt-80 pb-60 wow fadeInUp"
      style={{ backgroundColor: "#222222" }}
    >
      {isOpen && <Modal isOpen={isOpen} close={closeModal} />}
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-8">
            <div className="bd-cta__info mb-30">
              <h3 className="bd-cta__title text-white">
                Why Should You Train at DriveSphere?
              </h3>
              <div className="why_para mt-20">
                <p>
                  <u>
                    <strong>
                      The European Union has introduced a new Directive that
                      encourages simulator-based training as an effective way to
                      develop driving skills.
                    </strong>
                  </u>
                </p>
                <p>
                  Our driving training center offers you a customized program
                  where you can
                  <u>
                    <strong>
                      learn and practice driving skills without stress!
                    </strong>
                  </u>
                  We’ve got you covered!
                </p>
                <p>
                  With the latest technology and equipment, you'll
                  <u>
                    <strong>become a confident driver</strong>
                  </u>
                  while experiencing an engaging and effective learning
                  experience.
                </p>
                <p>
                  Plus joining our training center means significantly
                  <u>
                    <strong>
                      reducing the duration and cost of your training.
                    </strong>
                  </u>
                  No more wasting time and money on traditional methods!
                </p>
                <p>
                  <u>
                    <strong>
                      Training at DriveSphere is currently the best way pass
                      your driving test exam with honors!
                    </strong>
                  </u>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bd-section__btn-wrapper text-lg-end">
              <img
                src="assets/img/extra/euComission.png"
                className="euroComLogo"
                alt="european comission logo"
              />
              <button onClick={openModal} className="bd-border-btn">
                Subscribe for FREE
                <i className="fas fa-angle-right"></i>
                <i className="fas fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EUSection;
