import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  home = () => {
    return (
      <div className="App">
        <h1>Welcome to CoTrip</h1>
      </div>
    );
  };
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <main>
          <Route path="/" exact render={this.home}></Route>
        </main>
      </div>
    );
  }
}

export default App;
