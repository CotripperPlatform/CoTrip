import React, { Component } from "react";
import "./BookATripPage.css";
import NavBar from "../../components/Navbar/Navbar";
import people from "assets/images/profile_default.svg";
import BookATripImage from "../../components/BookATripImage/BookATripImage";
import Banner from "../../components/Banner/Banner";
import InputTextField from "../../components/InputTextField/InputTextField";
import Banner__pink from "assets/images/Banner__pink.png";
import image1 from "assets/images/hawaii.png";
import image2 from "assets/images/greece.png";
import image3 from "assets/images/southernCaribbean.png";
import image4 from "assets/images/easternCaribbean.png";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import { render } from "enzyme";

class BookATripPage extends Component {
  state = {
    cards: [cards],
    filteredCards: [...cards]
  };

  search = e => {
    let filter = this.state.cards[0].filter(item => {
      return item.description.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({
      filteredCards: filter
    });
  };
  render() {
    return (
      <div className="BookATripPage">
        <NavBar page={3} profileImage={people} />
        <Banner background={Banner__pink}>
          <h3 style={{ margin: 0 }}>Book a Trip</h3>
          <InputTextField
            type="text"
            variation="search"
            name="search directory"
            placeholder="Search Trip"
            onChange={this.search}
          />
        </Banner>
        <header className="BookATripPage__header">Upcoming Trips</header>
        <BookATripImage className="BookATripPage__images" cards={this.state.filteredCards} />
        <div className="BookATripPage__button-container">
          <Button text="View Previous Trips" color="pink" size="large" />
        </div>
        <Footer history={this.props.history} handle_logout={this.props.handle_logout} />
      </div>
    );
  }
}

let cards = [
  { image: image1, url: "/hawaii-2020", description: "Hawaii May 2020" },
  { image: image2, url: "#", description: "Greece & Croatia Cruise June 2020" },
  { image: image3, url: "#", description: "Southern Caribbean Cruise July 2020" },
  { image: image1, url: "#", description: "Hawaii May 2020" },
  { image: image4, url: "#", description: "Eastern Caribbean Cruise New Year's 2021" }
];

export default BookATripPage;
