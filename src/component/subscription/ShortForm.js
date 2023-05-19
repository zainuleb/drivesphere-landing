import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ShortForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("entry.1122186267", name); // Name field code
    formData.append("entry.1918902053", email); // Email field code

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
