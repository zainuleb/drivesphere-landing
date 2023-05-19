import React, { useState } from "react";
import Modal from "../modal/Modal";

const WhoShouldJoin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="bd-about__inner-section pt-90 pb-60">
      {isOpen && <Modal isOpen={isOpen} close={closeModal} />}
      <div className="container">
        <div className="bd-section__inner-content">
          <h3 className="bd-section__inner-title">
            Who should join our DriveSphere Membership?
          </h3>
          <div className="bd-section__inner-list mb-40">
            <ul>
              <li>
                <span>
                  <i class="fas fa-arrow-right"></i>
                </span>
                <strong>
                  <u>
                    If you want to ditch the stress and anxiety of driving on
                    busy roads.
                  </u>
                </strong>
              </li>
              <li>
                <span>
                  <i class="fas fa-arrow-right"></i>
                </span>
                <strong>
                  <u>
                    If you need a flexible schedule to train your practical
                    driving skills.
                  </u>
                </strong>
              </li>
              <li>
                <span>
                  <i class="fas fa-arrow-right"></i>
                </span>
                <strong>
                  <u>
                    If you're tired and bored of traditional driving classes.
                  </u>
                </strong>
              </li>
              <li>
                <span>
                  <i class="fas fa-arrow-right"></i>
                </span>
                <strong>
                  <u>
                    If you want to get your driving license as fast as possible.
                  </u>
                </strong>
              </li>
            </ul>
          </div>
          <p>
            Our DriveSphere membership has got you covered with a totally
            customized training program designed just for you.
          </p>
          <p>
            You'll tackle real-life driving scenarios like snowy roads and
            mountainous terrain, heavy traffic, and general distractions to
            master your driving skills in a fun and engaging way.
          </p>
          <p>
            The best part?
            <strong>
              <u>Our membership program is absolutely FREE </u>
            </strong>
            and comes with your
            <strong>
              <u>first simulator lesson for FREE</u>
            </strong>
            .
          </p>
          <p className="bold_para">
            <strong>
              <u>" No credit card needed, and no hidden fees or charges."</u>
            </strong>
          </p>

          <p>
            You won’t have to beg your parents or friends to give you driving
            lessons. We are here for you.
          </p>
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
  );
};

export default WhoShouldJoin;
