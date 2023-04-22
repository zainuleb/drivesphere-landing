import React from "react";

const EUSection = () => {
  return (
    <div
      className="bd-cta__section primary-bg pt-60 pb-30 wow fadeInUp"
      style={{ backgroundColor: "black" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="bd-cta__info mb-30">
              <h3 className="bd-cta__title text-white">
                WHAT SAYS THE EUROPEAN COMMISSION?
              </h3>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                eget libero malesuada, porttitor neque eu, lobortis metus.
                Nullam rutrum nisi vitae nisl interdum, nec venenatis elit
                laoreet. Sed vel elit a augue vehicula malesuada.
              </span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bd-section__btn-wrapper text-lg-end">
              <img
                src="assets/img/extra/european-commission.svg"
                className="euroComLogo"
                alt="european comission logo"
                width="300px"
              />
              {/* <a href="contact.html" className="bd-border-btn">
            Contact us
            <i className="fas fa-angle-right"></i>
            <i className="fas fa-angle-right"></i>
          </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EUSection;
