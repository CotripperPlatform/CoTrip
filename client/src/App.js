import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import SplashPage from "./pages/SplashPage/SplashPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <main>
          <Route path="/" exact component={SplashPage}></Route>
        </main>
      </div>
    );
  }
}

export default App;
