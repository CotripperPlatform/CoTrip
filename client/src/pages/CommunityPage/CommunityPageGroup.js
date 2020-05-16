import React, { Component } from "react";
import "./CommunityPageGroup.css";
import NavBar from "../../components/Navbar/Navbar";
import people from "assets/images/profile_default.svg";
import Banner from "../../components/Banner/Banner";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__Community from "assets/images/community_banner.png";
import ModalContainerJoin from "../../components/Modal/_ModalContainer-join";

// const handleClick = e => {
//   console.log("Clicked");
// };

class CommunityPageGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joinGroup: false,
      showModal: false
    };
  }

  handleConfirm = evt => {
    evt.preventDefault();
    this.setState({
      joinGroup: true,
      showModal: false
    });
  };

  handleLeave = evt => {
    evt.preventDefault();
    this.setState({
      joinGroup: false,
      showModal: false
    });
  };

  handleCloseModal = evt => {
    evt.preventDefault();
    this.setState({
      showModal: false
    });
  };

  handleOpenModal = evt => {
    // evt.preventDefault()
    console.log("Ive been clicked!!!");
    this.setState({
      showModal: true
    });
  };

  pillClick = val => {
    console.log(val);
  };

  render() {
    return (
      <div>
        <div className="CommunityPage-Group-">
          <NavBar page={1} profileImage={people} />
          <Banner background={Banner__Community}>
            <div className="community-page-header">
              {" "}
              <h3 style={{ margin: -5 }}>Group: Moms in DC</h3>
            </div>
            <InputTextField
              type="text"
              variation="search"
              name="search directory"
              placeholder="Search My Directory"
              variation="wide"
            />
            {this.state.joinGroup ? (
              <div className="Modal_align">
                <ModalContainerJoin
                  buttonText="Leave Group"
                  buttonTextColor="white"
                  buttonColor="pink"
                  buttonSize="small"
                  message="Are you sure you want to leave the group?"
                  confirmText="Leave Group"
                  cancelText="Exit"
                  onConfirm={this.handleLeave}
                  onClose={this.handleCloseModal}
                  modalOpen={this.state.showModal}
                  handleOpenModal={this.handleOpenModal}
                />
              </div>
            ) : (
              <div className="Modal_align">
                <ModalContainerJoin
                  buttonText="Join"
                  buttonTextColor="black"
                  buttonColor="yellow"
                  buttonSize="small"
                  message="Are you sure you want to join?"
                  confirmText="Join"
                  cancelText="Exit"
                  onConfirm={this.handleConfirm}
                  onClose={this.handleCloseModal}
                  modalOpen={this.state.showModal}
                  handleOpenModal={this.handleOpenModal}
                />
              </div>
            )}
          </Banner>{" "}
        </div>
      </div>
    );
  }
}
export default CommunityPageGroup;
