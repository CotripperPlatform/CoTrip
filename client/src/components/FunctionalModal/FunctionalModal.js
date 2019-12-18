
import React, {Component} from 'react';
import "./FunctionalModal.css";
import Modal from "../Modal/Modal";

class FunctionalModal extends Component{
  constructor(props){
    super(props);
    this.state = {
      showModal: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleCloseModal(evt) {
    evt.preventDefault();
    this.setState({
      showModal: false
    })
  };

  handleOpenModal(evt) {
    evt.preventDefault();
    this.setState({
      showModal: true
    })
  };

  render(){
    return(
      <div className="FunctionalModal">
        {this.state.showModal ? <div onClick={this.handleCloseModal} className="back-drop-close-modal"></div> : null}
      </div>
    );
  }
}

export default FunctionalModal;
