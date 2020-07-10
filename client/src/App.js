import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"
import SplashPage from "./pages/SplashPage/SplashPage";
import BookATripPage from "./pages/BookATripPage/BookATripPage";
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import CommunityPageGroup from "./pages/CommunityPage/CommunityPageGroup";
import ForumPageHashtag from "./pages/ForumPage/ForumPageHashtag";
import ForumPageTopic from "./pages/ForumPage/ForumPageHashtagTopic";
import ForumPageDiscover from "./pages/ForumPage/ForumPageDiscover";

import CommunityPagePeople from "./pages/CommunityPage/CommunityPagePeople";
import ForumPage from "./pages/ForumPage/ForumPage";
import DirectoryPeople from "./pages/DirectoryPage/DirectoryPeople";
import DirectoryGroup from "./pages/DirectoryPage/DirectoryGroups";
import HomePage from "../src/pages/HomePage/HomePage";
import MemberProfilePage from "./pages/MemberProfilePage/MemberProfilePage";
import TripDetail from "./pages/TripDetail/TripDetail";
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
      ]
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
        {loggedIn ? (
          <Route
            path="/"
            exact
            render={routerProps => (
              <main>
                <Navbar to={`/member-page/${this.state.userid}`} profileImage={this.state.image} page={5}></Navbar>
                <HomePage handle_logout={this.handleLogout} {...routerProps} {...this.state} />
              </main>
            )}
          ></Route>
        ) : (
            <Redirect to="/welcome" />
          )}
        <Route path="/welcome" exact component={SplashPage}></Route>
        <Route
          path="/TripDetail"
          exact
          render={routerProps => (
            <main>
              <Navbar to={`/member-page/${this.state.userid}`} profileImage={this.state.image} page={3}></Navbar>
              <TripDetail tripName={"Hawaii"} handle_logout={this.handleLogout} {...routerProps} />
            </main>
          )}
        ></Route>{" "}
        <Route
          path="/community/join-groups"
          exact
          render={routerProps => (
            <main>
              <Navbar to={`/member-page/${this.state.userid}`} profileImage={this.state.image} page={1}></Navbar>
              <CommunityPage handle_logout={this.handleLogout} {...routerProps} />
            </main>
          )}
        ></Route>
        <Route
          path="/community/view-group"
          exact
          render={routerProps => (
            <main>
              <Navbar to={`/member-page/${this.state.userid}`} profileImage={this.state.image} page={1}></Navbar>
              <CommunityPageGroup handle_logout={this.handleLogout} {...routerProps} />
            </main>
          )}
        ></Route>
        <Route
          path="/community/explore-people"
          exact
          render={routerProps => (
            <main>
              <Navbar to={`/member-page/${this.state.userid}`} profileImage={this.state.image} page={1}></Navbar>
              <CommunityPagePeople handle_logout={this.handleLogout} {...routerProps} />
            </main>
          )}
        ></Route>
        <Route
          path="/book-a-trip"
          exact
          render={routerProps => (
            <main>
              <Navbar to={`/member-page/${this.state.userid}`} profileImage={this.state.image} page={3}></Navbar>
              <BookATripPage handle_logout={this.handleLogout} {...routerProps} />
            </main>
          )}
        ></Route>
        {this.state.profileLoaded === true ? (
          <Route
            path="/member-page/:memberId" // Get memberId from this.props.match.params.memberId within the MemberProfilePage
            exact
            render={routerProps => (
              <main>
                <Navbar to={`/member-page/${this.state.userid}`} profileImage={this.state.image} page={5}></Navbar>
                <MemberProfilePage
                  {...this.state}
                  handle_logout={this.handleLogout}
                  {...routerProps}
                />
              </main>
            )}
          ></Route>
        ) : (
            ""
          )}
        <Route
          path="/forum-page"
          exact
          render={routerProps => (
            <main>
              <Navbar to={`/member-page/${this.state.userid}`} profileImage={this.state.image} page={2}></Navbar>
              <ForumPage handle_logout={this.handleLogout} {...routerProps} {...this.state} />
            </main>
          )}
        ></Route>
        <Route
          path="/forum-page-hashtag"
          exact
          render={routerProps => (
            <main>
              <Navbar to={`/member-page/${this.state.userid}`} profileImage={this.state.image} page={2}></Navbar>
              <ForumPageHashtag
                handle_logout={this.handleLogout}
                {...routerProps}
                {...this.state}
              />
            </main>
          )}
        ></Route>
        <Route
          path="/forum-page-discover"
          exact
          render={routerProps => (
            <main>
              <Navbar to={`/member-page/${this.state.userid}`} profileImage={this.state.image} page={2}></Navbar>
              <ForumPageDiscover
                handle_logout={this.handleLogout}
                {...routerProps}
                {...this.state}
              />
            </main>
          )}
        ></Route>
        <Route
          path="/forum-page-topic"
          exact
          render={routerProps => (
            <main>
              <Navbar to={`/member-page/${this.state.userid}`} profileImage={this.state.image} page={2}></Navbar>
              <ForumPageTopic handle_logout={this.handleLogout} {...routerProps} {...this.state} />
            </main>
          )}
        ></Route>
        <Route
          path="/directory/people"
          exact
          render={routerProps => (
            <main>
              <Navbar to={`/member-page/${this.state.userid}`} profileImage={this.state.image} page={0}></Navbar>
              <DirectoryPeople handle_logout={this.handleLogout} {...routerProps} />
            </main>
          )}
        ></Route>
        <Route
          path="/directory/groups"
          exact
          render={routerProps => (
            <main>
              <Navbar to={`/member-page/${this.state.userid}`} profileImage={this.state.image} page={0}></Navbar>
              <DirectoryGroup handle_logout={this.handleLogout} {...routerProps} />
            </main>
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
      </div>
    );
  }
}

export default App;
