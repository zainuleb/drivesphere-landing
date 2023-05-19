import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-section">
      <h2>Data Privacy Policy</h2>
      <p>
        At DriveSphere Technologies, we are committed to protecting your
        personal information and respecting your privacy. This Data Privacy
        Policy explains how we collect, use, disclose, and store your personal
        data in accordance with the European Union General Data Protection
        Regulation (GDPR) and other applicable data protection laws.
      </p>
      <h5>1. Information We Collect</h5>
      <p>
        We may collect the following types of personal information from you:
        <ul className="modal-list">
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
      <h5>2. How We Use Your Information</h5>
      <p>
        We use your personal information for the following purposes:
        <ul className="modal-list">
          <li>
            To provide you with our driving simulator training services and
            fulfill your training requests.
          </li>
          <li>
            To communicate with you about our services, updates, and promotions.
          </li>
          <li>
            To personalize your training experience and improve our services.
          </li>
          <li>
            To comply with legal obligations, such as verifying your eligibility
            to use our services.
          </li>
        </ul>
      </p>
      <h5>3. Data Retention</h5>
      <p>
        We will retain your personal data only for as long as necessary to
        fulfill the purposes for which it was collected and to comply with legal
        obligations. Once the data is no longer needed, we will securely delete
        or anonymize it.
      </p>

      <h5>4. Data Sharing and Disclosure</h5>
      <p>
        We may share your personal information with third parties in the
        following circumstances:
        <ul className="modal-list">
          <li>
            With our service providers who assist us in delivering our services,
            such as payment processors and IT support.
          </li>
          <li>
            With government authorities or law enforcement agencies when
            required by law or to protect our legal rights.
          </li>
          <li>
            With your explicit consent, for any other purpose disclosed to you
            at the time of collection.
          </li>
        </ul>
      </p>
      <h5>5. Data Security</h5>
      <p>
        We have implemented appropriate technical and organizational measures to
        safeguard your personal data against unauthorized access, disclosure,
        alteration, or destruction. We regularly review and update our security
        practices to ensure the ongoing protection of your information.
      </p>

      <h5>6. Your Data Protection Rights</h5>
      <p>
        You have the right to access, correct, or delete your personal
        information held by us. You also have the right to restrict or object to
        the processing of your personal data and the right to data portability.
        To exercise these rights or for any privacy-related inquiries, please
        contact us using the contact details provided below.
      </p>

      <h5>7. Changes to this Policy</h5>
      <p>
        We may update this Data Privacy Policy from time to time to reflect
        changes in our privacy practices or legal requirements. We will notify
        you of any material changes by posting the updated policy on our website
        or by other appropriate means.
      </p>

      <h5>8. Contact Us</h5>
      <p>
        If you have any questions, concerns, or requests regarding your personal
        data or this Data Privacy Policy, please contact us at:
      </p>
      <p>
        <i>DriveSphere Technologies</i>
        <br />
        <a href="tel:+49015237981154">
          <i>+49 015237981154</i>
        </a>
        <br />
        <a href="mailto:hello@drivesphere.tech">
          <i>hello@drivesphere.tech</i>
        </a>
      </p>
      <p>
        <b>
          By using our services or providing your personal information, you
          consent to the collection, use, and disclosure of your information as
          described in this Data Privacy Policy.
        </b>
      </p>
      <p>Last Updated: May 2023</p>
    </div>
  );
};

export default PrivacyPolicy;
