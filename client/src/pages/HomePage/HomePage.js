import React from "react";
import "./HomePage.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const HomePage = props => {
  return (
    <div className="HomePage__wrapper">
      <nav>
        <NavBar></NavBar>
      </nav>
      <div className="HomePage__content">
        <div className="placeholder-welcome">
          <h1>WELCOME USER</h1>
        </div>
      </div>
      <footer className="HomePage__footer-wrapper">
        <Footer />
      </footer>
    </div>
  );
};

export default HomePage;
