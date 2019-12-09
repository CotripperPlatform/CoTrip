import React, { Component } from 'react';
import "./Modal.css";


// Class Based React Component
class Modal extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "Modal",
    };
  }
  // Runs after Component is loaded in the broswer
  componentDidMount() { }
  render() {
    return (
      <div className={this.state.classList}>
        <div className="modal-header">
          <span className="close-modal-btn" onClick={this.props.onClose}>×</span>
        </div>
        <div className="modal-body">
          <div className="htag">
            <h3>{this.props.message}</h3>
          </div>
        </div>
        <div className="modal-footer">
          <div className="cancel">
            <button className="cancel" onClick={this.props.onCancel}>{this.props.cancelText}</button>
          </div>
          <div className="confirm">
            <button className="confirm" onClick={this.props.onConfirm}>{this.props.confirmText}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
