import React from "react";
import Button from "../Button/Button";
import "./Modal.css";

const Modal = props => {
  return (
    <div
      className="Modal"
      style={{
        transform: props.showModal ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: props.showModal ? "1" : "0"
      }}
    >
      <div className="Modal__close">
        <a href="#" className="Modal__closeButton" onClick={props.onClose}>
          ×
        </a>
      </div>
      <div className="Modal__body">
        <div className="Modal__messageBox">
          <h3 className="Modal__messageText">{props.message}</h3>
        </div>
      </div>
      <div className="Modal__footer">
        <div className="Modal__footerButtons">
          <button className="Modal__footerButtonCancel" onClick={props.onClose}>
            {props.cancelText}
          </button>
        </div>
        <div className="Modal__footerButtons">
          <button className="Modal__footerButtonConfirm" onClick={props.onConfirm}>
            {props.confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
