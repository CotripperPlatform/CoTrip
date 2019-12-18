
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
    alert('Done!')
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
        {this.state.showModal ? <div onClick={this.handleCloseModal}></div> : null}
        {this.state.showModal ? null : <a href="#" className="FunctionalModal__openModal" onClick={this.handleOpenModal}>Click to show modal</a>}
        <Modal message={this.props.message}
          showModal={this.state.showModal}
          confirmText={this.props.confirmText} 
          cancelText={this.props.cancelText}
          onConfirm={this.handleCloseModal}
          onClose={this.handleCloseModal}/>
      </div>
    );
  }
}

export default FunctionalModal;
