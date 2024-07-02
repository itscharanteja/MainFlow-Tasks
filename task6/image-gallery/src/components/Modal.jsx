import React from "react";
import "./Modal.css";

const Modal = ({ image, closeModal }) => {
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <img src={image} alt="Selected" />
      </div>
    </div>
  );
};

export default Modal;
