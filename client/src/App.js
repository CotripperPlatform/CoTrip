import React, { Component } from "react";
import Layout from "./components/Layout/Layout"

import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faHeart,
  faTable,
  faComment,
  faCaretRight,
  faCaretLeft,
  faSearch,
  faAngleLeft,
  faAngleRight,
  faCommentDots,
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { BASE_URL } from "./services/constants";
import { handleSignup, handleLogin, handleLogout } from "./services/User";

library.add(
  fab,
  far,
  fas,
  faCheckSquare,
  faHeart,
  faTable,
  faComment,
  faCaretRight,
  faCaretLeft,
  faSearch,
  faAngleLeft,
  faAngleRight,
  faCommentDots,
  faEdit
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged_in:
        localStorage.getItem("token") && localStorage.getItem("token") != undefined ? true : false,
      email: "",
      first_name: "",
      image: "",
      profileLoaded: false,
      menuItems: [
        { menuItem: "My Directory", link: "/" },
        { menuItem: "Community", link: "/community" },
        { menuItem: "Forum", link: "/forum-page" },
        { menuItem: "Book A Trip", link: "/book-a-trip" }
      ],

    };
    this.handleSignup = handleSignup.bind(this);
    this.handleLogin = handleLogin.bind(this);
    this.handleLogout = handleLogout.bind(this);

  }
  componentDidMount() {
    if (this.state.logged_in) {
      fetch(`${BASE_URL}/auth/user`, {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`
        }
      })
        .then(res => res.json())
        .then(json => {
          // console.log(json);
          if (json.detail == "Invalid token.") {
            this.handleLogout();
          } else {
            this.setState(
              {
                email: json.email,
                first_name: json.profile.first_name,
                image: json.profile.image,
                userid: json.id,
                profileLoaded: true
              },
              this.logState
            );
          }
        });
    }
  }

  logState = () => console.log("App.js state finished: ", this.state);
  render() {
    const loggedIn = this.state.logged_in;
    return (
      <div className="App">
        <Layout
          {...this.state}
          {...this.props}
          handleSignup={this.handleSignup}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout}

        ></Layout>
      </div>
    );
  }
}

export default App;
