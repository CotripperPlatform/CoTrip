import React from 'react';
import "./Hawaii2020.css";
import NavBar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Banner__pink from "../../components/Banner/Banner__pink.png"
import TripDetails from "../../components/TripDetails/TripDetails";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

const Hawaii2020 = (props) => {
  return(
    <div className="Hawaii2020">
      <NavBar/>
      <Banner background={Banner__pink}>
        <h3>Trip: Hawaii 2020</h3>
      </Banner>
      <TripDetails />
      <div>ActivityList component here</div>
      <div className="Hawaii2020__button-container">
        <Button text="Book Now" color="pink" size="large" />
      </div>
      <Footer />
    </div>
  );
}

export default Hawaii2020;
