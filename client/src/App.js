import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import LoginPage from "../src/components/LoginPage/LoginPage";
import SplashPage from "../src/components/SplashPage/SplashPage";
import "./App.css";

class App extends Component {
  
  splash = () => {
    return (
      <div className='splash'>
        <h1>Welcome to CoTrip</h1>
        <SplashPage />
      </div>
    );
  };

  login = () => {
    return (
      <LoginPage />
    );
  }

  render() {
    return (
      <div className='App'>
        {/* <nav>
          <Link to="/">Splash</Link>
          <Link to="/login">Login</Link>
        </nav> */}
        <main>
          <Route path="/" exact render={this.splash}></Route>
          <Route path="/login" exact render={this.login}></Route>
        </main>
      </div>
    );
  }
}

export default App;
