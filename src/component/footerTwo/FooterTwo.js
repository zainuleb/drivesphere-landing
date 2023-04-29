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
                    <img src="assets/img/logo/logo.png" alt="" width="120px" />
                  </div>
                  <h5>Disclaimer</h5>

                  <div className="bd-footer-widget__content">
                    <p>
                      Our driving simulator training is for educational and
                      training purposes only, designed to simulate real-life
                      driving scenarios and improve drivers' skills. Results may
                      vary based on individual skill levels and other factors.
                      Our training does not replace on-road driving experience
                      required to obtain a driver's license. We recommend
                      consulting certified instructors for proper guidance. By
                      using our program, you agree we are not liable for any
                      damages or losses arising from your use of our service.
                    </p>
                    {/* <div className="bd-footer-widget__social">
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
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bd-footer__copyright bd-border-top pt-40 pb-40">
            <span>
              All rights reserved © 2023 <a href="#/">DriveSphere</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
