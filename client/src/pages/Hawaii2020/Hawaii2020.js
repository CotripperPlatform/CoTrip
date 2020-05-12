import React from "react";
import "./Hawaii2020.css";
import NavBar from "components/Navbar/Navbar";
import people from "assets/images/profile_default.svg";
import Banner from "components/Banner/Banner";
import Banner__pink from "assets/images/Banner__pink.png";
import Banner__Image from "assets/images/TripBanner.png";
import TripDetails from "components/TripDetails/TripDetails";
import ActivityList from "components/ActivityList/ActivityList";
import Button from "components/Button/Button";
import Footer from "components/Footer/Footer";

const Hawaii2020 = props => {
  let momActivities = ["Spa", "Wine Nights", "Brunch with Other Moms"];
  let kidsActivities = [
    "Snorkeling",
    "Hiking",
    "Island Hopping",
    "Dancing",
    "Food Markets",
    "Beaches"
  ];

  let { tripName } = props;

  return (
    <div className="Hawaii2020">
      <NavBar page={3} profileImage={people} />
      <Banner background={Banner__pink}>
        <h3>Trip: {tripName} 2020</h3>
      </Banner>
      <div className="Hawaii2020__BannerImageCard-container">
        <Banner type="BannerLarge" background={Banner__Image}>
          <h3>Hawaii 2020</h3>
        </Banner>
      </div>
      <div className="Hawaii2020__body-container">
        <TripDetails />
        <div className="Hawaii2020__ActivityList-container">
          <ActivityList title="Activities for Moms" activities={momActivities} color="purple" />
        </div>
        <div className="Hawaii2020__ActivityList-container"></div>
        <ActivityList title="Activities for Moms & Kids" activities={kidsActivities} color="red" />
      </div>
      <div className="Hawaii2020__button-container">
        <Button text="Book Now" color="pink" size="large" />
      </div>
      <Footer history={props.history} handle_logout={props.handle_logout} />
    </div>
  );
};

export default Hawaii2020;
