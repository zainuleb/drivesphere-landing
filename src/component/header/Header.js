import React from "react";

const Header = () => {
  return (
    <header>
      <div className="bd-header__section bd-header__transparent">
        <div className="bd-header__main" id="header-sticky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-6 col-6 mx-auto">
                <div className="logo">
                  <a href="index.html">
                    <img
                      src="assets/img/logo/logo.png"
                      alt="logo"
                      classNameName="header-logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
