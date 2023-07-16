import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ShortForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
    formData.append("entry.1304327223", name); // Name field code
    formData.append("entry.1849012275", email); // Email field code

    fetch(
      "https://docs.google.com/forms/d/1oqVLdo1HJ6yiGf3U8twMRPhyaNXzLCzZHyX4LAKqFNY/formResponse",
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
    <form onSubmit={handleSubmit} className="mt-20">
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
        <div className="col-xxl-12 mt-10">
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
        <div className="col-xxl-12 mt-10 pb-30">
          <div className="postbox__comment-btn d-flex justify-content-center">
            <button type="submit" className="bd-btn float-right">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ShortForm;
