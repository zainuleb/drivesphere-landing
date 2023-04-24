import React from "react";

const FooterTwo = () => {
  return (
    <footer>
      <div className="bd-footer__section theme-bg-2 pt-50">
        <div className="container">
          <div className="bd-footer__main pb-50">
            <div className="row">
              <div className="col-lg-10">
                <div className="bd-footer-widget footer-col-1">
                  <div className="bd-footer-widget__title">
                    <a href="index.html">
                      <img
                        src="assets/img/logo/logo.png"
                        alt=""
                        width="120px"
                      />
                    </a>
                  </div>
                  <h5>Disclaimer</h5>

                  <div className="bd-footer-widget__content">
                    <p>
                      The driving simulator training provided by our center is
                      for educational and training purposes only. The
                      simulations and scenarios presented in our training
                      program are designed to simulate real-life driving
                      situations and to help drivers improve their driving
                      skills.
                      <br />
                      Please note that the use of our driving simulators does
                      not replace the need for on-road driving experience as a
                      equirement for obtaining a driver's license. We strongly
                      recommend that all drivers seeking to obtain or improve
                      their driving skills to also consult with a certified
                      driving instructor for proper guidance and training.
                      <br />
                      While our training program has been designed and developed
                      based on research and data, we cannot guarantee specific
                      results or outcomes. The effectiveness of the training
                      program may vary depending on individual driver skill
                      levels and other factors beyond our control. By using our
                      driving simulator training program, you agree that we
                      shall not be liable for any direct, indirect, incidental,
                      or consequential damages or losses that may arise from
                      your use of our service.
                    </p>
                    <div className="bd-footer-widget__social">
                      <span>
                        <a href="/#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </span>
                      <span>
                        <a href="/#">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </span>
                      <span>
                        <a href="/#">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </span>
                      <span>
                        <a href="/#">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bd-footer__copyright bd-border-top pt-40 pb-40">
            <span>
              All rights reserved © 2022 <a href="index.html">DriveSphere</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
