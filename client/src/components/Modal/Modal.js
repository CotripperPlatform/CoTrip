import React from "react";
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
        <a href="#" className="Modal__close-button" onClick={props.onClose}>
          ×
        </a>
      </div>
      <div className="Modal__body">
        <div className="Modal__message-box">
          <h3 className="Modal__message-text">{props.message}</h3>
        </div>
      </div>
      <div className="Modal__footer">
        <div className="Modal__footer-buttons">
          <button className="Modal__footer-button-cancel" onClick={props.onClose}>
            {props.cancelText}
          </button>
        </div>
        <div className="Modal__footer-buttons">
          <button className="Modal__footer-button-confirm" onClick={props.onConfirm}>
            {props.confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
