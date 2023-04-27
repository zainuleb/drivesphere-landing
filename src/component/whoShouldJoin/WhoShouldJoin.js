import React from "react";
import { Link } from "react-router-dom";

const WhoShouldJoin = () => {
  return (
    <div className="bd-about__inner-section pt-90 pb-60">
      <div className="container">
        {/* <div className="bd-about__inner-content">
          <div className="row gx-1">
            <div className="col-lg-6">
              <div className="mb-30 w-img">
                <img src="assets/img/portfolio/portfilo-inner-3.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-30 w-img">
                <img src="assets/img/portfolio/portfilo-inner-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div> */}

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
              <u>Our membership program is absolutely FREE </u>{" "}
            </strong>
            and comes with your{" "}
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
          <Link to="/signUp" className="bd-btn">
            Subscribe to get your first class for FREE
            <span>
              <i className="fa-regular fa-angle-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhoShouldJoin;
