import React, { Component } from "react";
import "./DirectoryPeople.css";
import NavBar from "../../components/Navbar/Navbar";
import people from "assets/images/profile_default.svg";
import Banner from "../../components/Banner/Banner";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__Directory from "assets/images/Banner__pink.png";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import Pill from "../../components/Pill/Pill";
import PersonCard from "../../components/PersonCard/PersonCard";
import image1 from "../../assets/images/profile-picture-1.png";
import image2 from "../../assets/images/profile-picture-2.png";
import image3 from "../../assets/images/profile-picture-3.png";
import image4 from "../../assets/images/profile-picture-4.png";
import image5 from "../../assets/images/profile-picture-5.png";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../services/constants";

let friends = [];
let others = [];
let friendRequests = [];

export default class DirectoryPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      others: [],
      friendRequests: []
    };
  }

  componentDidMount() {
    this.getFriends();
    friends = this.state.friends;
  }

  getFriends = () => {
    fetch(`${BASE_URL}/profile`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`
      }
    })
      .then(res => res.json())
      .then(json => {
        this.makeFriends(json);
      });
  };

  makeFriends = data => {
    for (let i = 0; i < data.length; i++) {
      if (this.trueFriends(data[i].user)) {
        let user = data[i];
        //instead of name just whole user
        friends.push(user);
      } else if (data[i].user === this.props.userid) {
        //do nothing
      } else if (this.props.requests.length != 0) {
        for (let j = 0; j < this.props.requests.length; j++) {
          if (data[i].user === this.props.requests[j]) {
            let user = data[i];
            friendRequests.push(user);
          } else {
            let user = data[i];
            others.push(user);
          }
        }
      } else {
        let user = data[i];
        others.push(user);
      }
    }
    this.setState({
      friends: friends,
      others: others,
      friendRequests: friendRequests
    });
  };

  showFriends = () => {
    let cards = [];
    this.friendCards(cards);
    return cards;
  };

  friendCards = arr => {
    let length = friends.length;
    for (let i = 0; i < length; i++) {
      //change to get the ith in the list and that objects name and image
      arr.push(
        <div className="CommunityPage__momCard-single">
          <Link
            to={`/member-page/${this.state.friends[i].user}`}
            style={{ textDecoration: "none" }}
          >
            <PersonCard
              image={this.state.friends[i].image}
              name={this.state.friends[i].first_name}
              location="Washington D.C."
            />
          </Link>
          <button className="FriendButton" onClick={this.removeFriend}>
            Remove Friend
          </button>
          <div className="FriendId">{this.state.friends[i].user}</div>
        </div>
      );
    }
  };

  handleClick = e => {
    ("/");
  };

  // Page or
  DirectoryPeople = props => {
    return (
      <div className="CommunityPage">
        <Banner background={Banner__Directory}>
          <h3 style={{ margin: 0 }}>Directory: My Friends</h3>
          <InputTextField
            type="text"
            variation="wide"
            name="search directory"
            placeholder="Search Groups"
          />
        </Banner>
        <div className="secondNav">
          <a className="secondNav">
            <Button text="My Friends" color="purple" size="long" handleClick={this.handleClick} />
          </a>
          <a className="secondNav" href="./groups">
            <Button text="My Groups" color="outline" size="long" />
          </a>
        </div>{" "}
        <div className="CommunityPage_SortByButton">
          <div className="CommunityPage_SortByText">Sort By: Location </div>
        </div>
        <div className="CommunityPage_body">
          <div>
            <header className="CommunityPage__header">Location:</header>
          </div>
        </div>
      </div>
    );
  };

  showOthers = () => {
    let cards = [];
    this.otherCards(cards);
    return cards;
  };

  otherCards = arr => {
    let length = others.length;
    for (let i = 0; i < length; i++) {
      //same as the friends function
      arr.push(
        <div className="CommunityPage__momCard-single">
          <Link to={`/member-page/${this.state.others[i].user}`} style={{ textDecoration: "none" }}>
            <PersonCard
              image={this.state.others[i].image}
              name={this.state.others[i].first_name}
              location="Washington D.C."
            />
          </Link>
          <button className="FriendButton" onClick={this.sendRequest}>
            Add Friend
          </button>
          <div className="FriendId">{this.state.others[i].user}</div>
        </div>
      );
    }
  };

  showRequests = () => {
    let cards = [];
    this.requestCards(cards);
    return cards;
  };

  requestCards = arr => {
    let length = friendRequests.length;
    for (let i = 0; i < length; i++) {
      //same as the friends function
      arr.push(
        <div className="CommunityPage__momCard-single">
          <Link
            to={`/member-page/${this.state.friendRequests[i].user}`}
            style={{ textDecoration: "none" }}
          >
            <PersonCard
              image={this.state.friendRequests[i].image}
              name={this.state.friendRequests[i].first_name}
              location="Washington D.C."
            />
          </Link>
          <button className="FriendButton" onClick={this.acceptRequest}>
            Accept
          </button>
          <div className="FriendId">{this.state.friendRequests[i].user}</div>
        </div>
      );
    }
  };

  trueFriends = friendId => {
    for (let i = 0; i < this.props.connections.length; i++) {
      if (this.props.connections[i] === friendId) {
        return true;
      }
    }
  };

  removeFriend = e => {
    let nonFriend = e.target.parentElement.children[2].textContent;
    let connectionsList = this.props.connections;
    for (let i = 0; i < this.props.connections.length; i++) {
      if (this.props.connections[i] === nonFriend) {
        connectionsList.splice(i, 1);
      }
    }
    let data = { connections: connectionsList };
    fetch(`${BASE_URL}/profile/${this.props.userid}`, {
      method: "PATCH",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        //success
      })
      .catch(error => {
        //error
      });
    window.location.reload(true);
  };

  sendRequest = e => {
    let newFriend = e.target.parentElement.children[2].textContent;
    e.target.parentElement.children[1].textContent = "Request Sent";
    let requestList;
    for (let i = 0; i < this.state.others.length; i++) {
      if (this.state.others[i].user === newFriend) {
        requestList = this.state.others[i].requests;
      }
    }
    requestList.push(this.props.userid);
    let data = { requests: requestList };
    fetch(`${BASE_URL}/profile/${newFriend}`, {
      method: "PATCH",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        //success
      })
      .catch(error => {
        //error
      });
  };

  acceptRequest = e => {
    let newFriend = e.target.parentElement.children[2].textContent;
    let connectionsList = this.props.connections;
    for (let i = 0; i < this.state.friendRequests.length; i++) {
      if (this.state.friendRequests[i].user === newFriend) {
        connectionsList.push(this.state.friendRequests[i].user);
      }
    }
    let data = { connections: connectionsList };
    fetch(`${BASE_URL}/profile/${this.props.userid}`, {
      method: "PATCH",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        //success
      })
      .catch(error => {
        //error
      });
    window.location.reload(true);
    this.manageRequests(newFriend);
  };

  manageRequests = id => {
    let requestList = this.props.requests;
    for (let i = 0; i < requestList.length; i++) {
      if (id === requestList[i]) {
        console.log("it's here");
        requestList.splice(i, 1);
        requestList.push(0);
      }
    }
    let data = { requests: requestList };
    fetch(`${BASE_URL}/profile/${this.props.userid}`, {
      method: "PATCH",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        //success
      })
      .catch(error => {
        //error
      });
  };

  testRequests = () => {
    let data = { requests: [3] };
    fetch(`${BASE_URL}/profile/${this.props.userid}`, {
      method: "PATCH",
      headers: {
        Authorization: `Token ${localStorage.getItem("token")}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        //success
      })
      .catch(error => {
        //error
      });
  };

  render() {
    return (
      <div className="CommunityPage">
        <Banner background={Banner__Directory}>
          <h3 style={{ margin: 0 }}>Directory: My Friends</h3>
          <InputTextField
            type="text"
            variation="wide"
            name="search directory"
            placeholder="Search Groups"
          />
        </Banner>
        <div className="secondNav">
          <a className="secondNav">
            <Button text="My Friends" color="purple" size="long" handleClick={this.handleClick} />
          </a>
          <a className="secondNav" href="./groups">
            <Button text="My Groups" color="outline" size="long" />
          </a>
        </div>
        <header className="CommunityPage__header">Friends:</header>
        <div className="CommunityPage__moms-in-city-container">
          {this.showFriends()}
          {console.log(this.state)}
        </div>
        <header className="CommunityPage__header">Requests:</header>
        <div className="CommunityPage__moms-in-city-container">{this.showRequests()}</div>
        <header className="CommunityPage__header">Add Other Moms As Friends:</header>
        <div className="CommunityPage_SortByButton">
          <div className="CommunityPage_SortByText">Sort By: Location </div>
        </div>
        <div className="CommunityPage_body">
          <div className="CommunityPage__moms-in-city-container">
            {this.showOthers()}
            <div className="CommunityPage__momCard-single">
              <Card outline size="medium-tall">
                <a href="/">Discover New Connections</a>
              </Card>
            </div>
          </div>
          <a className="seeMore-Button">See More</a>
        </div>
      </div>
    );
  }
}
