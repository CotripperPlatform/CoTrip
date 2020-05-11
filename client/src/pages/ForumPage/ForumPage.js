import React from "react";
import "./ForumPage.css";
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

const ForumPage = props => {
  return (
    <div className="ForumPage">
      <NavBar page={3} profileImage={people} />
      <Banner background={Banner__pink}>
        <h3 style={{ margin: 0 }}>Forum</h3>
        <InputTextField
          type="text"
          variation="search"
          name="search directory"
          placeholder="Search Trip"
        />
      </Banner>
      <header className="ForumPage__header">Upcoming Trips</header>
      <BookATripImage
        className="ForumPage__images"
        cards={[
          { image: image1, url: "/hawaii-2020", description: "Hawaii May 2020" },
          { image: image2, url: "#", description: "Greece & Croatia Cruise June 2020" },
          { image: image3, url: "#", description: "Southern Caribbean Cruise July 2020" },
          { image: image1, url: "#", description: "Hawaii May 2020" },
          { image: image4, url: "#", description: "Eastern Caribbean Cruise New Year's 2021" }
        ]}
      />
      <div className="ForumPage__button-container">
        <Button text="View Previous Trips" color="pink" size="large" />
      </div>
      <Footer history={props.history} handle_logout={props.handle_logout} />
    </div>
  );
};

export default ForumPage;
