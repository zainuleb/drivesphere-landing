import React from "react";

const AboutUs = () => {
  return (
    <div className="bd-about__section pt-120 pb-90">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="bd-about__img w-img mr-70 mb-30 wow fadeInRight">
              <img src="assets/img/extra/aboutUs.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bd-about__text mb-30 wow fadeInLeft">
              <div className="bd-section__title-wrapper">
                {/* <span className="bd-section__subtitle bd-section__subtitle-lg mb-10">
                  Brians behind DriveSphere
                </span> */}
                <h3 className="bd-section__title bd-section__title-lg mb-25">
                  Brians behind DriveSphere
                </h3>
                <p>
                  DriveSphere is the leading driving simulator training center
                  in Europe managed by Lorena Andrade and Zain Ul Ebad. Our
                  high-quality simulator-based training is tailored to meet the
                  standards of all European Union driving associations and legal
                  road traffic regulations. Our training program is backed by
                  data and research, and is continuously updated to ensure that
                  they are up-to-date with the latest road challenges.
                </p>
                <p className="mb-25">
                  Our training program has proven benefits for drivers,
                  including improved reaction times, enhanced driving skills,
                  and increased confidence on the road. We achieve this by using
                  realistic and interactive scenarios that help drivers learn
                  how to handle real-life driving situations safely and
                  effectively. Our training program is backed by data and
                  research, and is continuously updated to ensure that they are
                  up-to-date with the latest road challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
