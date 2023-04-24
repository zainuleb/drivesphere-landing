import React from "react";

const SubscriptionForm = () => {
  return (
    <div className="bd-contact__section pt-120 pb-90">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="postbox__comment-form mb-30">
              <h3 className="postbox__comment-form-title">Sign Up Now</h3>
              <form
                method="POST"
                action="https://docs.google.com/forms/d/1A6q8bLkPk02PRuwlhH792Yyxn2XYLV1HXQ0rrC5Dio4/formResponse"
              >
                <div className="row">
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="postbox__comment-input">
                      <input
                        name="entry.1122186267"
                        type="text"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="postbox__comment-input">
                      <input
                        name="entry.1918902053"
                        type="email"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="postbox__comment-input">
                      <select>
                        <option value="" disabled selected>
                          Choose your City ...
                        </option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Budapest">Budapest</option>
                        <option value="Brussels">Brussels</option>
                        <option value="Bucharest">Bucharest</option>
                        <option value="Hamburg">Hamburg</option>
                        <option value="London">London</option>
                        <option value="Madrid">Madrid</option>
                        <option value="Milan">Milan</option>
                        <option value="Munich">Munich</option>
                        <option value="Paris">Paris</option>
                        <option value="Prague">Prague</option>
                        <option value="Rome">Rome</option>
                        <option value="Sofia">Sofia</option>
                        <option value="Stockholm">Stockholm</option>
                        <option value="Vienna">Vienna</option>
                        <option value="Warsaw">Warsaw</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-xxl-6 col-xl-6 col-lg-6">
                    <div className="postbox__comment-input">
                      <input
                        type="text"
                        name="entry.289865807"
                        placeholder="Mention your city if not in List"
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
