import React from "react";

const Modal = ({ isOpen, close }) => {
  return (
    <div className={`modal ${isOpen ? "displayBlock" : "displayNone"}`}>
      <div className="modal-content">
        <p className="modal_heading">
          <strong>
            <u>
              " Whoa, hold your horses! Our driving simulators are not ready to
              hit the virtual road just yet. But fear not, because you can be
              the first to know when our world of realistic driving training
              programs is ready to roll. Leave us your mail, and we’ll make sure
              to secure your driver’s seat! And remember, the first session is
              on us."
            </u>
          </strong>
        </p>
        <div>
          <h3>Ready to accelerate your driving skills and conquer the road?</h3>
        </div>
        <div></div>
        <button className="btn_modal" onClick={() => close()}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
