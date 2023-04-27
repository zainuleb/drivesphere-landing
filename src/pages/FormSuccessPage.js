import React from "react";

const FormSuccessPage = () => {
  return (
    <>
      <div className="breadcrumb__section include-bg overlay_success ">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content d-md-flex justify-content-between align-items-center">
                <h3 className="breadcrumb__title">
                  Thank you!
                  <br />
                  Your form has been submitted
                </h3>
                <div className="breadcrumb__list"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormSuccessPage;
