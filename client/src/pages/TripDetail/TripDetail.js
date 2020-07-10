import React from "react";
import "./TripDetail.css";
import NavBar from "components/Navbar/Navbar";
import people from "assets/images/profile_default.svg";
import Banner from "components/Banner/Banner";
import Banner__pink from "assets/images/Banner__pink.png";
import Banner__Image from "assets/images/TripBanner.png";
import TripDetails from "components/TripDetails/TripDetails";
import ActivityList from "components/ActivityList/ActivityList";
import Button from "components/Button/Button";
import Footer from "components/Footer/Footer";

const TripDetail = props => {
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

  let handleClick = (e) => console.log(e.target)

  return (
    <div className="TripDetail">
      <div className="TripDetail-Header">
        <Banner background={Banner__pink}>
          <h3>Trip: {tripName} 2020</h3>
        </Banner>
      </div>
      <div className="TripDetail__BannerImageCard-container">
        <Banner type="BannerLarge" background={Banner__Image}>
          <h3>Hawaii 2020</h3>
        </Banner>
      </div>
      <div className="TripDetail__body-container">
        <TripDetails />
        <div className="TripDetail__ActivityList-container">
          <ActivityList title="Activities for Moms" activities={momActivities} color="purple" />
        </div>
        <div className="TripDetail__ActivityList-container"></div>
        <ActivityList title="Activities for Moms & Kids" activities={kidsActivities} color="red" />
      </div>
      <div className="TripDetail__button-container">
        <Button text="Book Now" color="pink" size="large" handleClick={handleClick} />
      </div>
      <Footer history={props.history} handle_logout={props.handle_logout} />
    </div>
  );
};

export default TripDetail;
