import React, { Component } from "react";
import { Route } from "react-router-dom";
import SplashPage from "./pages/SplashPage/SplashPage";
import BookATripPage from "./pages/BookATripPage/BookATripPage";
import HomePage from "../src/pages/HomePage/HomePage";
import ComingSoonPage from "./pages/ComingSoonPage/ComingSoonPage";
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
  faCommentDots
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
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
  faCommentDots
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged_in: localStorage.getItem("token") ? true : false,
      email: "",
      first_name: "",
      image: ""
    };
  }
  componentDidMount() {
    if (this.state.logged_in) {
      fetch("http://localhost:8000/auth/user", {
        headers: {
          Authorization: `Token ${localStorage.getItem("token")}`
        }
      })
        .then(res => res.json())
        .then(json => {
          console.log(json);
          this.setState({
            email: json.email,
            first_name: json.profile.first_name,
            image: json.profile.image
          });
        });
    }
  }
  handle_login = data => {
    fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        console.log(json.token);
        localStorage.setItem("token", json.token);
        this.setState({
          logged_in: true,
          email: json.user.email,
          first_name: json.user.profile.first_name,
          image: json.user.profile.image
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  handle_signup = data => {
    fetch("http://localhost:8000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
        localStorage.setItem("token", json.token);
        this.setState({
          logged_in: true,
          email: json.user.email,
          first_name: json.user.profile.first_name,
          image: json.user.profile.image
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  handle_logout = () => {
    localStorage.removeItem("token");
    this.setState({ logged_in: false, email: "", first_name: "", image: "" });
  };
  render() {
    return (
      <div className="App">
        <main>
          <Route path="/" exact component={SplashPage}></Route>
          <Route path="/book-a-trip" exact render={routerProps => (
            <BookATripPage {...routerProps}/>)}>
          </Route>
          <Route path="/coming_soon" exact component={ComingSoonPage}></Route>
          <Route
            path="/coming_soon"
            exact
            render={routerProps => (
              <ComingSoonPage handle_logout={this.handle_logout} {...routerProps} {...this.state} />
            )}
          ></Route>
          <Route
            path="/login"
            exact
            render={routerProps => (
              <LoginPage handleLogin={this.handle_login} {...routerProps} {...this.state} />
            )}
          ></Route>
          <Route
            path="/register"
            exact
            render={routerProps => (
              <OnboardingPage
                handleSignup={this.handle_signup}
                {...routerProps}
                logged_in={this.state.logged_in}
              />
            )}
          ></Route>
          <Route
            path="/home"
            exact
            render={routerProps => (
              <HomePage handle_logout={this.handle_logout} {...routerProps} {...this.state} />
            )}
          ></Route>
        </main>
      </div>
    );
  }
}

export default App;
