import React from "react";
import "./HomePage.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "../../components/Navbar/Navbar";

const HomePage = props => {
  return (
    <div className="home-page-wrapper">
      <nav>
        <NavBar />
      </nav>
    </div>
  );
};

export default HomePage;
