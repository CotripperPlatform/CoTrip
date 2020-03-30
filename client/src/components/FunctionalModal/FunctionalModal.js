import React, { Component } from "react";
import "./FunctionalModal.css";
import Modal from "../Modal/Modal";

class FunctionalModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  handleCloseModal = evt => {
    evt.preventDefault();
    // alert('Done!')
    this.setState({
      showModal: false
    });
  };

  handleOpenModal = evt => {
    evt.preventDefault();
    this.setState({
      showModal: true
    });
  };

  render() {
    return (
      <div className="FunctionalModal__container">
        {this.state.showModal ? (
          <div onClick={this.handleCloseModal} className="FunctionalModal__overLay"></div>
        ) : null}
        {this.state.showModal ? null : (
          <button className="FunctionalModal__openModalButton" onClick={this.handleOpenModal}>
            {this.props.buttonText}
          </button>
        )}
        <Modal
          message={this.props.message}
          showModal={this.state.showModal}
          confirmText={this.props.confirmText}
          cancelText={this.props.cancelText}
          onConfirm={this.handleCloseModal}
          onClose={this.handleCloseModal}
        />
      </div>
    );
  }
}

export default FunctionalModal;
