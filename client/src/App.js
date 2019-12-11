import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import SplashPage from "./components/SplashPage/SplashPage";
import "./App.css";

class App extends Component {
  splash = () => {
    return <SplashPage />;
  };
  render() {
    return (
      <div className='App'>
        {/* <nav>
          <Link to="/">Splash</Link>
        </nav> */}
        <main>
          <Route path="/" exact render={this.splash}></Route>
        </main>
      </div>
    );
  }
}

export default App;
