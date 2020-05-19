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
    this.setState({
      modalOpen: false
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="Modal__container">
        <Button
          text={this.props.buttonText}
          textColor={this.props.buttonTextColor}
          color={this.props.buttonColor}
          size={this.props.buttonSize}
          handleClick={this.props.handleOpenModal}
        />

        <Modal
          message={this.props.message}
          showModal={this.props.modalOpen}
          confirmText={this.props.confirmText}
          cancelText={this.props.cancelText}
          onConfirm={this.props.onConfirm}
          onClose={this.props.onClose}
          modalOpen={this.state.modalOpen}
        />
      </div>
    );
  }
}

export default ModalContainerJoin;
