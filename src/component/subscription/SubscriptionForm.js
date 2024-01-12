import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SubscriptionForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("Berlin");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSelectedCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handlePlanChange = (e) => {
    console.log(e.target.id);
    setSelectedPlan(e.target.id);
  };

  const handlePrivacyPolicyChange = (e) => {
    setPrivacyPolicyAccepted(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!privacyPolicyAccepted) {
      alert("Please accept the Privacy Policy.");
      return;
    }
    const formData = new FormData();
    formData.append("entry.207834910", name); // Name field code
    formData.append("entry.846044297", email); // Email field code
    formData.append("entry.1955388634", selectedCity); // City field code
    formData.append("entry.467576796", city); // Mention your City field code
    formData.append("entry.1006557993", selectedPlan); // Pricing Plan field code

    fetch(
      "https://docs.google.com/forms/d/1wWdZ1hRX2GTClBneIKpYyRtXExJhmW8MwRUp7q6P86c/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: formData,
      }
    )
      .then(() => {
        navigate("/success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bd-contact__section pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="postbox__comment-form mb-30">
              <h3 className="postbox__comment-form-title">Sign Up Now</h3>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="postbox__comment-input">
                      <input
                        name="entry.207834910"
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={handleNameChange}
                        pattern="[A-Za-z ]+"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="postbox__comment-input">
                      <input
                        name="entry.846044297"
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={handleEmailChange}
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="postbox__comment-input">
                      <select
                        value={selectedCity}
                        onChange={handleSelectedCityChange}
                      >
                        <option value="Berlin – Charlottenburg">
                          Berlin – Charlottenburg
                        </option>
                        <option value="Berlin – Mitte ">Berlin – Mitte </option>
                        <option value="Berlin – Friedrichshain">
                          Berlin – Friedrichshain
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="postbox__comment-input">
                      <input
                        type="text"
                        name="entry.289865807"
                        placeholder="Mention your City"
                        value={city}
                        onChange={handleCityChange}
                        pattern="[A-Za-z ]+"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-xxl-12 col-xl-12 col-lg-12">
                    <div className="plans">
                      <div className="title">Choose a pricing plan</div>
                      <label className="plan basic-plan" for="earlyDrive">
                        <input
                          type="radio"
                          name="plan"
                          id="earlyDrive"
                          defaultChecked
                          value="Basic Module (149€)"
                          onChange={handlePlanChange}
                        />
                        <div className="plan-content">
                          <img
                            loading="lazy"
                            src="assets/img/extra/car (3).png"
                            alt="car.png"
                          />
                          <div className="plan-details">
                            <span>Basic Module (149€)</span>
                            <p>
                              5 hrs - Basic training that includes all theory
                              aspects.
                            </p>
                          </div>
                        </div>
                      </label>
                      <label className="plan complete-plan" for="secureDrive">
                        <input
                          type="radio"
                          id="secureDrive"
                          name="plan"
                          value="Advanced Module (149€)"
                          onChange={handlePlanChange}
                        />
                        <div className="plan-content">
                          <img
                            loading="lazy"
                            src="assets/img/extra/smart-car.png"
                            alt="car.png"
                          />
                          <div className="plan-details">
                            <span>Advanced Module (149€)</span>
                            <p>
                              5 hrs - Multiple terrains, weather, and high
                              traffic situations, with focus on pedestrian
                              safety.
                            </p>
                          </div>
                        </div>
                      </label>
                      <label className="plan complete-plan" for="morningDrive">
                        <input
                          type="radio"
                          id="morningDrive"
                          name="plan"
                          value="Safety Module (149€)"
                          onChange={handlePlanChange}
                        />
                        <div className="plan-content">
                          <img
                            loading="lazy"
                            src="assets/img/extra/car (2).png"
                            alt="car.png"
                          />
                          <div className="plan-details">
                            <span>Safety Module (149€)</span>
                            <p>
                              5 hrs - Learn to identify and react safely to
                              particular dangerous traffic situations.
                            </p>
                          </div>
                        </div>
                      </label>
                      <label className="plan complete-plan" for="smartDrive">
                        <input
                          type="radio"
                          id="smartDrive"
                          name="plan"
                          value="SmartDrive (190€)"
                          onChange={handlePlanChange}
                        />
                        <div className="plan-content">
                          <img
                            loading="lazy"
                            src="assets/img/extra/electric-car.png"
                            alt="car.png"
                          />
                          <div className="plan-details">
                            <span>Practical Test (119€)</span>
                            <p>
                              3 hrs - Three practical exams with AI instructor.
                              Perfect for driver's license practical exam.
                            </p>
                          </div>
                        </div>
                      </label>
                      {/* <label className="plan complete-plan" for="proDrive">
                        <input
                          type="radio"
                          id="proDrive"
                          name="plan"
                          value="ProDrive (290€)"
                          onChange={handlePlanChange}
                        />
                        <div className="plan-content">
                          <img
                            loading="lazy"
                            src="assets/img/extra/car.png"
                            alt="car.png"
                          />
                          <div className="plan-details">
                            <span>ProDrive (372€)</span>
                            <p>
                              Includes 12 simulator classes per month. Any day.
                              Anytime.
                            </p>
                          </div>
                        </div>
                      </label>
                      <label className="plan complete-plan" for="ultraDrive">
                        <input
                          type="radio"
                          id="ultraDrive"
                          name="plan"
                          onChange={handlePlanChange}
                        />
                        <div className="plan-content">
                          <img
                            loading="lazy"
                            src="assets/img/extra/racing-car.png"
                            alt="car.png"
                          />
                          <div className="plan-details">
                            <span>UltraDrive (1.392€)</span>
                            <p>
                              Includes unlimited simulator classes per month.
                              Any day. Anytime.
                            </p>
                          </div>
                        </div>
                      </label> */}
                    </div>
                  </div>

                  <div className="col-xxl-12 mt-30">
                    <div className="postbox__comment-btn d-flex justify-content-start">
                      <div className="postbox__privacy-check">
                        <input
                          name="privacyPolicy"
                          type="checkbox"
                          checked={privacyPolicyAccepted}
                          onChange={handlePrivacyPolicyChange}
                          required
                        />
                        <span> </span>
                        <label htmlFor="privacyPolicy">
                          I agree to the <span> </span>
                          <Link to="/privacy-policy" target="_blank">
                            Privacy Policy
                          </Link>
                        </label>
                      </div>
                    </div>
                    <div className="postbox__comment-btn d-flex justify-content-end">
                      <button type="submit" className="bd-btn float-right">
                        Sign Up
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="pt-inner-sidebar theme-bg mb-30">
              <div className="tp-pt__inmner-step mb-30">
                <h4>Address</h4>
                <span>Markgrafenstraße 56, 10117 Mitte</span>
              </div>
              {/* <div className="tp-pt__inmner-step mb-30">
                <h4>Call</h4>
                <span>------------------</span>
              </div> */}
              {/* <div className="tp-pt__inmner-step mb-30">
                <h4>Email us</h4>
                <span>---------------------</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;
