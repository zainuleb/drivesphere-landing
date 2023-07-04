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
              <h2 className="bd-cta__title text-white">
                Discover the Benefits of Training at DriveSphere
              </h2>
              <div className="why_para mt-20">
                <p>
                  <strong>
                    <u>
                      The European Union has recognized simulator-based training
                      as an effective method for developing driving skills.
                    </u>
                  </strong>
                </p>
                <p>
                  At our driving training center, we offer a customized program
                  where you can{" "}
                  <strong>
                    <u>learn and practice driving skills without stress</u>
                  </strong>
                  . We've got you covered!
                </p>
                <p>
                  With state-of-the-art technology and equipment, you'll become
                  a{" "}
                  <strong>
                    <u>confident driver</u>
                  </strong>{" "}
                  while experiencing an engaging and effective learning
                  experience.
                </p>
                <p>
                  Plus, training at DriveSphere means{" "}
                  <strong>
                    <u>
                      significantly reducing the duration and cost of your
                      training
                    </u>
                  </strong>
                  . No more wasting time and money on traditional methods!
                </p>
                <p>
                  <strong>
                    <u>
                      Training at DriveSphere is currently the best way to pass
                      your driving test exam with honors
                    </u>
                  </strong>
                  !
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bd-section__btn-wrapper text-lg-end">
              <img
                src="assets/img/extra/euComission.png"
                className="euroComLogo"
                alt="European Commission Logo"
              />
              <button onClick={openModal} className="bd-border-btn">
                Subscribe now for FREE
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
