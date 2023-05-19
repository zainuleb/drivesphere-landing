import React from "react";
import ShortForm from "../subscription/ShortForm";

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
              on us. "
            </u>
          </strong>
        </p>
        <div>
          <h4>Ready to accelerate your driving skills and conquer the road?</h4>
        </div>
        <div>
          <ShortForm />
        </div>
        <button className="btn_modal" onClick={() => close()}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
