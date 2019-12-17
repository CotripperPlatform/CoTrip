import React from 'react';
import "./BookATripPage.css";
import NavBar from "../../components/Navbar/Navbar";
import BookATripImage from "../../components/BookATripImage/BookATripImage";
import Banner from "../../components/Banner/Banner";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__pink from "../../components/Banner/Banner__pink.png";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";

const BookATripPage = (props) => {
  return(
    <div className="BookATripPage">
      <NavBar />
      <Banner background={Banner__pink}>
        <h3 style={{margin: 0}}>Book a Trip</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search Trip"/>
      </Banner>
      <header className="BookATripPage__header">Upcoming Trips</header>
      <BookATripImage className="BookATripPage__images"
        cards={[
          {"image": "hawaii", "url": "#", "description": "Hawaii May 2020"},
          {"image": "greece", "url": "#", "description": "Greece & Croatia Cruise June 2020"},
          {"image": "southernCaribbean", "url": "#", "description": "Southern Caribbean Cruise July 2020"},
          {"image": "hawaii", "url": "#", "description": "Hawaii May 2020"},
          {"image": "easternCaribbean", "url": "#", "description": "Eastern Caribbean Cruise New Year's 2021"}
        ]}
      />
      <div className="BookATripPage__button-container">
        <Button text="View Previous Trips" color="pink" size="large"/>
      </div>
      <Footer />
    </div>
  );
}

export default BookATripPage;
