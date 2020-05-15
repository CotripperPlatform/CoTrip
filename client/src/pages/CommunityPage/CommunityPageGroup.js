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
      showModal: true
    };
  }

  // handleConfirm = evt => {
  //   evt.preventDefault();
  //   this.setState({
  //     joinGroup: true
  //   });
  // };

  // handleLeave = evt => {
  //   evt.preventDefault();
  //   this.setState({
  //     joinGroup: false
  //   });
  //   alert("GROUP LEFT!");
  // };

  pillClick = val => {
    console.log(val);
  };

  // handleConfirm = evt => {
  //   evt.preventDefault();
  //   alert("GROUP HAS BEEN JOINED!");
  //   this.setState({
  //     joinGroup: true,
  //     modalOpen: false, // <--- NEED TO PASS THIS DOWN!
  //     showModal: false // or this needs to render deeper then community page
  //   });
  // };

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
                  modalOpen={this.state.modalOpen}
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
                  modalOpen={this.state.modalOpen}
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
