import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  splash = () => {
    return (
      <div className='splash'>
        <h1>Welcome to CoTrip</h1>
      </div>
    );
  };
  render() {
    return (
      <div className='App'>
        <nav>
          <Link to="/">Splash</Link>
        </nav>
        <main>
          <Route path="/" exact render={this.splash}></Route>
        </main>
      </div>
    );
  }
}

export default App;
