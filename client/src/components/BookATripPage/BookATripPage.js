import React from 'react';
import "./BookATripPage.css";
import NavBar from "../Navbar/Navbar";
import BookATripImage from "../BookATripImage/BookATripImage";
import Banner from "../Banner/Banner";
import InputTextField from "../InputTextField/InputTextField";
import Banner__pink from "../Banner/Banner__pink.png";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";

const BookATripPage = (props) => {
  let {cards} = props;
  return(
    <div className="BookATripPage">
      <NavBar />
      <Banner background={Banner__pink}>
        <h3 style={{margin: 0}}>Book a Trip</h3>
        <InputTextField type="text" variation="search" name="search directory" placeholder="Search Trip"/>
      </Banner>
      {/* <p className="BookATripPage__header">{props.header}</p> */}
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
