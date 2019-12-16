import React from 'react';
import "./BookATripPage.css";
import NavBar from "../Navbar/Navbar";
import BookATripImage from "../BookATripImage/BookATripImage";
// import Banner from "../Banner/Banner";
import Button from "../Button/Button";
import Footer from "../Footer/Footer";

const BookATripPage = (props) => {
  let {cards} = props;
  return(
    <div className="BookATripPage">
      <NavBar />
      <p className="BookATripPage__header">{props.header}</p>
      <BookATripImage 
        cards={[
          {"image": "hawaii", "url": "#", "description": "Hawaii May 2020"},
          {"image": "greece", "url": "#", "description": "Greece & Croatia Cruise June 2020"},
          {"image": "southernCaribbean", "url": "#", "description": "Southern Caribbean Cruise July 2020"},
          {"image": "hawaii", "url": "#", "description": "Hawaii May 2020"},
          {"image": "easternCaribbean", "url": "#", "description": "Eastern Caribbean Cruise New Year's 2021"}
        ]}
      />
      <Button text="View Previous Trips" color="pink" size="large"/>
      <Footer />
    </div>
  );
}

export default BookATripPage;
