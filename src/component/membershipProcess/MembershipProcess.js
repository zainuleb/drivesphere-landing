import React from "react";

const MembershipProcess = () => {
  return (
    <div class="bd-about__inner-section pt-130 pb-90">
      <div class="container">
        {/* <div class="bd-about__inner-content">
          <div class="row gx-1">
            <div class="col-lg-6">
              <div class="mb-30 w-img">
                <img src="assets/img/portfolio/portfilo-inner-3.jpg" alt="" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-30 w-img">
                <img src="assets/img/portfolio/portfilo-inner-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div> */}

        <div class="bd-section__inner-content">
          <h3 class="bd-section__inner-title">
            This is how the
            <span> </span>
            <span className="bd-section__inner-titleSub">
              DriveSphere Membership
            </span>
            <span> </span>
            works:
          </h3>
          <div class="bd-section__inner-list mb-40">
            <ul>
              <li>
                <span>
                  <i class="fa-solid fa-circle-dot"></i>
                </span>
                Join today our FREE Membership program.
              </li>
              <li>
                <span>
                  <i class="fa-solid fa-circle-dot"></i>
                </span>
                Choose a membership plan that suits your needs, whether you're a
                complete beginner or looking to enhance your driving skills. No
                credit card is required at sign-up.
              </li>
              <li>
                <span>
                  <i class="fa-solid fa-circle-dot"></i>
                </span>
                Attend your FREE personalized simulator-based training session
                with our state-of-the-art simulators and expert instruction.
              </li>
              <li>
                <span>
                  <i class="fa-solid fa-circle-dot"></i>
                </span>
                Would you like to continue your training with us? Pay for your
                preferred plan. You can always change your plan at a later
                stage!
              </li>
              <li>
                <span>
                  <i class="fa-solid fa-circle-dot"></i>
                </span>
                Benefit from flexible scheduling, reduced training costs, and
                accelerate the process of getting your driver's license.
              </li>
            </ul>
          </div>
          <br />
          <h3 class="bd-cta__title text-black d-flex justify-content-center">
            Subscribe to get your first class for FREE
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MembershipProcess;
