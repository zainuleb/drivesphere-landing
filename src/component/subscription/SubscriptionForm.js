import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SubscriptionForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("Berlin");
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("entry.1122186267", name); // Name field code
    formData.append("entry.1918902053", email); // Email field code
    formData.append("entry.289865807", selectedCity); // City field code
    formData.append("entry.281628252", city); // Mention your City field code

    fetch(
      "https://docs.google.com/forms/d/1A6q8bLkPk02PRuwlhH792Yyxn2XYLV1HXQ0rrC5Dio4/formResponse",
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
                        name="entry.1122186267"
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
                        name="entry.1918902053"
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
                        <option value="Berlin">Berlin</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6"></div>
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

                  <div className="col-xxl-12">
                    <div className="postbox__comment-btn">
                      <button type="submit" className="bd-btn">
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
                <span>-------------------</span>
              </div>
              <div className="tp-pt__inmner-step mb-30">
                <h4>Call</h4>
                <span>------------------</span>
              </div>
              <div className="tp-pt__inmner-step mb-30">
                <h4>Email us</h4>
                <span>---------------------</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;
