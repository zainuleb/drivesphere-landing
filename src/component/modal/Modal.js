import React from "react";

const Modal = ({ isOpen, close }) => {
  return (
    <div className={`modal ${isOpen ? "displayBlock" : "displayNone"}`}>
      <div className="modal-content">
        <h2>Data Privacy Policy</h2>
        <p>
          At DriveSphere Technologies, we are committed to protecting your
          personal information and respecting your privacy. This Data Privacy
          Policy explains how we collect, use, disclose, and store your personal
          data in accordance with the European Union General Data Protection
          Regulation (GDPR) and other applicable data protection laws.
        </p>
        <h3>1. Information We Collect</h3>
        <p>
          We may collect the following types of personal information from you:
          <ul>
            <li>
              Contact information, such as your name, email address, and phone
              number.
            </li>
            <li>
              Demographic information, such as your age, gender, and location.
            </li>
            <li>
              Training session data, such as simulator usage and performance
              metrics for training purposes.
            </li>
          </ul>
        </p>
        {/* Continue similarly for other sections... */}
        <h3>8. Contact Us</h3>
        <p>
          If you have any questions, concerns, or requests regarding your
          personal data or this Data Privacy Policy, please contact us at:
        </p>
        <p>
          DriveSphere Technologies
          <br />
          +49 015237981154
          <br />
          hello@drivesphere.tech
        </p>
        <p>
          By using our services or providing your personal information, you
          consent to the collection, use, and disclosure of your information as
          described in this Data Privacy Policy.
        </p>
        <p>Last updated: May 2023</p>
        <button onClick={() => close()}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
