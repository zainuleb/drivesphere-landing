import React from "react";

const AboutUs = () => {
  return (
    <div className="bd-about__section pt-120 pb-90">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="bd-about__img w-img mr-70 mb-30 wow fadeInRight">
              <img
                src="assets/img/extra/pexels-yoss-traore-2454510.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bd-about__text mb-30 wow fadeInLeft">
              <div className="bd-section__title-wrapper">
                <div className="about_us_header d-flex align-items-center mb-20">
                  <img src="assets/img/logo/logo.png" alt="logo" />
                  <h3 className="bd-section__title bd-section__title-lg">
                    DriveSphere
                  </h3>
                </div>
                <p>
                  DriveSphere is the leading driving simulator training center
                  in Europe managed by Lorena Andrade and Zain Ul Ebad. Our
                  high-quality simulator-based training is tailored to meet the
                  standards of all European Union driving associations and legal
                  road traffic regulations.
                </p>
                <div className="bd-section__inner-list mb-40">
                  <ul>
                    <li>
                      <span>
                        <i class="fas fa-angle-double-right"></i>
                      </span>
                      Our training program is
                      <strong> backed by hundreds of data research,</strong> and
                      is continuously updated to ensure that they are up-to-date
                      with the latest road challenges.
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-angle-double-right"></i>
                      </span>
                      It has proven benefits for drivers, including improved
                      reaction times, enhanced driving skills, and increased
                      confidence on the road. Leading to up to{" "}
                      <strong>60% of reduced road accidents.</strong>
                    </li>
                    <li>
                      <span>
                        <i class="fas fa-angle-double-right"></i>
                      </span>
                      With over 2.000 monthly active members, we are the biggest
                      simulator training center in Europe.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
