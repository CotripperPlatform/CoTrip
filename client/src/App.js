import React, { Component } from "react";
import { Route } from "react-router-dom";
import SplashPage from "./pages/SplashPage/SplashPage";
import BookATripPage from "./pages/BookATripPage/BookATripPage";
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import CommunityPagePeople from "./pages/CommunityPage/CommunityPagePeople";
import HomePage from "../src/pages/HomePage/HomePage";
import ComingSoonPage from "./pages/ComingSoonPage/ComingSoonPage";
import MemberPage from "./pages/MemberProfilePage/MemberProfilePage";
import Hawaii2020 from "./pages/Hawaii2020/Hawaii2020";
import OnboardingPage from "./pages/OnboardingPage/OnboardingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
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
import Navbar from "components/Navbar/Navbar.js";

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
      menuItems: [
        { menuItem: "My Directory", link: "/home" },
        { menuItem: "Community", link: "/community" },
        { menuItem: "Forum", link: "/forum-page" },
        { menuItem: "Book A Trip", link: "/book-a-trip" },
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
          console.log(json);
          if (json.detail == "Invalid token.") {
            this.handleLogout();
          } else {
            this.setState({
              email: json.email,
              first_name: json.profile.first_name,
              image: json.profile.image
            });
          }
        });
    }
  }

  render() {
    return (
      <div className="App">
        <main>
          <Route path="/" exact component={SplashPage}></Route>
          <Route path="/coming_soon" exact component={ComingSoonPage}></Route>
          <Route
            path="/hawaii-2020"
            exact
            render={routerProps => (
              <Hawaii2020 tripName={"Hawaii"} handle_logout={this.handleLogout} {...routerProps} />
            )}
          ></Route>{" "}
           <Route
            path="/community/explore-people"
            exact
            render={routerProps => (
              <CommunityPagePeople handle_logout={this.handleLogout} {...routerProps} />
            )}></Route>
           <Route
            path="/community/join-groups"
            exact
            render={routerProps => (
              <CommunityPage handle_logout={this.handleLogout} {...routerProps} />
            )}></Route>
          <Route path="/book-a-trip"
            exact
            render={routerProps => (
              <BookATripPage handle_logout={this.handleLogout} {...routerProps} />
            )}
          ></Route>
          <Route
            path="/member-page"
            exact
            render={routerProps => (
              <MemberPage handle_logout={this.handleLogout} {...routerProps} />
            )}
          ></Route>
          <Route
            path="/coming_soon"
            exact
            render={routerProps => (
              <ComingSoonPage handle_logout={this.handleLogout} {...routerProps} {...this.state} />
            )}
          ></Route>
          <Route
            path="/login"
            exact
            render={routerProps => (
              <LoginPage handleLogin={this.handleLogin} {...routerProps} {...this.state} />
            )}
          ></Route>
          <Route
            path="/register"
            exact
            render={routerProps => (
              <OnboardingPage
                handleSignup={this.handleSignup}
                {...routerProps}
                logged_in={this.state.logged_in}
              />
            )}
          ></Route>
          <Route
            path="/home"
            exact
            render={routerProps => (
              <HomePage handle_logout={this.handleLogout} {...routerProps} {...this.state} />
            )}
          ></Route>
        </main>
      </div>
    );
  }
}

export default App;
