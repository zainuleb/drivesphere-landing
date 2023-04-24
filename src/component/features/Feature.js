import React from "react";

const Feature = () => {
  return (
    <div className="bd-feature__section theme-bg pt-30 pb-30 fix">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="bd-section__title-wrapper mb-50 wow fadeInUp">
              <span className="bd-section__subtitle bd-section__subtitle-lg mb-10">
                GET FIT FOR
              </span>
              <h3 className="bd-section__title bd-section__title-lg mb-25">
                DRIVING WITH US
              </h3>
              {/* <p className="mb-25">
                Lorem ipsum dolor sit amet conse cotur adip isicing elit sed do
                eiu smod tempor incid idunt labore arale tomader majhe ki keu
                ase bondhu Lorem ipsum dolor{" "}
              </p> */}
            </div>
            <div className="bd-feature__item-wrapper">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="bd-feature__item d-flex wow fadeInUp">
                    <div className="bd-feature__icon">
                      <span>
                        <i className="fa-thin fa-book-open"></i>
                      </span>
                    </div>
                    <div className="bd-feature__content">
                      <h3 className="bd-feature__title">
                        Train on a Safe Environment
                      </h3>
                      {/* <p>
                        Lorem ipsum dolor sit amet Lorem um dolor sit gamet,
                        conse tomader
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="bd-feature__item d-flex wow fadeInUp">
                    <div className="bd-feature__icon">
                      <span>
                        <i className="fa-thin fa-music"></i>
                      </span>
                    </div>
                    <div className="bd-feature__content">
                      <h3 className="bd-feature__title">
                        Over 40% Discount on All Services
                      </h3>
                      {/* <p>
                        Lorem ipsum dolor sit amet Lorem um dolor sit gamet,
                        conse tomader
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="bd-feature__item d-flex wow fadeInUp">
                    <div className="bd-feature__icon">
                      <span>
                        <i className="fa-thin fa-cart-shopping"></i>
                      </span>
                    </div>
                    <div className="bd-feature__content">
                      <h3 className="bd-feature__title">
                        Customized AI Driving Program
                      </h3>
                      {/* <p>
                        Lorem ipsum dolor sit amet Lorem um dolor sit gamet,
                        conse tomader
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="bd-feature__item d-flex wow fadeInUp">
                    <div className="bd-feature__icon">
                      <span>
                        <i className="fa-thin fa-lock"></i>
                      </span>
                    </div>
                    <div className="bd-feature__content">
                      <h3 className="bd-feature__title">Flexible Schedules</h3>
                      {/* <p>
                        Lorem ipsum dolor sit amet Lorem um dolor sit gamet,
                        conse tomader
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bd-feature__img p-relative z-index-11 wow fadeInUp">
              <img src="assets/img/extra/image2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
