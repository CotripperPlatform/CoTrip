import React, { Component } from 'react';
import "./Modal.css";



// Class Based React Component
class Modal extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  
  render() {
    return (
      <div className="Modal">
        <div>
          <span className="Modal__closeButton" onClick={this.props.onClose}>×</span>
        </div>
        <div className="Modal__body">
          <div className="Modal__message">
            <h3>{this.props.message}</h3>
          </div>
        </div>
        <div className="Modal__footer">
          <div className="Modal__footerButtons">
            <button className="Modal__footerButtonCancel" onClick={this.props.onCancel}>{this.props.cancelText}</button>
          </div>
          <div className="Modal__footerButtons">
            <button className="Modal__footerButtonConfirm" onClick={this.props.onConfirm}>{this.props.confirmText}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
