import React, { Component } from "react";
import Modal from "./Modal";
import Button from "../Button/Button";
import "./Modal-join.css";

class ModalContainerJoin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }
  handleCloseModal = evt => {
    evt.preventDefault();
    this.setState({
      modalOpen: false
    });
  };

  handleOpenModal = () => {
    this.setState({
      modalOpen: true
    });
  };

  handleConfirm = evt => {
    evt.preventDefault();
    this.setState({
      modalOpen: false // <--- NEED TO PASS THIS DOWN!
    });
  };

  handleLeave = evt => {
    evt.preventDefault();
    this.setState({
      modalOpen: true
    });
  };

  render() {
    return (
      <div className="Modal__container">
        <Button
          text={this.props.buttonText}
          textColor={this.props.buttonTextColor}
          color={this.props.buttonColor}
          size={this.props.buttonSize}
          handleClick={this.handleOpenModal}
        />

        <Modal
          message={this.props.message}
          showModal={this.state.modalOpen}
          confirmText={this.props.confirmText}
          cancelText={this.props.cancelText}
          onConfirm={this.handleConfirm}
          onClose={this.handleCloseModal}
          modalOpen={this.state.modalOpen}
        />
      </div>
    );
  }
}

export default ModalContainerJoin;
