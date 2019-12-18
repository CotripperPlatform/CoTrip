import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import SplashPage from "./pages/SplashPage/SplashPage";
import OnboardingPage from "pages/OnboardingPage/OnboardingPage";
import ComingSoonPage from "./pages/ComingSoonPage/ComingSoonPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import "./App.css";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import {
//   faCheckSquare,
//   faHeart,
//   faTable,
//   faComment,
//   faCaretRight,
//   faCaretLeft,
//   faSearch,
//   faAngleLeft,
//   faAngleRight,
//   faCommentDots
// } from "@fortawesome/free-solid-svg-icons";
// import { fab } from "@fortawesome/free-brands-svg-icons";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { far } from "@fortawesome/free-regular-svg-icons";
// library.add(
//   fab,
//   far,
//   fas,
//   faCheckSquare,
//   faHeart,
//   faTable,
//   faComment,
//   faCaretRight,
//   faCaretLeft,
//   faSearch,
//   faAngleLeft,
//   faAngleRight,
//   faCommentDots
// );

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged_in: localStorage.getItem("token") ? true : false,
      email: ""
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
          this.setState({ email: json.email });
        });
    }
  }
  handle_login = (e, data) => {
    e.preventDefault();
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
          email: json.user.email
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  handle_signup = data => {
    // e.preventDefault();
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
          email: json.user.email
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
  handle_logout = () => {
    localStorage.removeItem("token");
    this.setState({ logged_in: false, username: "" });
  };
  render() {
    return (
      <div className="App">
        <main>
          <Route path="/" exact component={SplashPage}></Route>
          {/* <Route path="/home" exact component={HomePage}></Route> */}
          <Route path="/coming_soon" exact component={ComingSoonPage}></Route>
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
              <OnboardingPage handleSignup={this.handle_signup} {...routerProps} {...this.state} />
            )}
          ></Route>
        </main>
      </div>
    );
  }
}

export default App;
