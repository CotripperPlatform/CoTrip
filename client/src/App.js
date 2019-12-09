<<<<<<< HEAD
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
=======
  
>>>>>>> parent of 08b33aa... Revert "Updated css variables with another font that was needed. Also cleaned up App and removed default React setup code."
    </div>
  );
=======
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
>>>>>>> develop
}

export default App;
