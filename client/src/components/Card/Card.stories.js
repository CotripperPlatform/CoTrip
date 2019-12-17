import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./Card";
import image from "../../assets/images/card_small3.png"; //here for example
import airplane from "../../assets/images/airplane-shape.png";
import people from "../../assets/images/add-friend.png";
import trends from "../../assets/images/trending-hashtags.png";
import groups from "../../assets/images/protest.png";

storiesOf("Card", module)
  .add("Card, Purple", () => <Card color="purple" size="large" />)
  .add("Card, Purple, Small", () => <Card color="purple" size="small" />)
  .add("Card, Pink", () => <Card color="pink" size="large" />)
  .add("Card, Pink, Small", () => <Card color="pink" size="small" />)
  .add("Card, Blank", () => <Card size="large" />)
  .add("Card, Blank, Small", () => <Card size="small" />)
  .add("Card, Picture BG, Medium", () => <Card picture={image} alt="whoops" size="medium" />)
  .add("Card, Picture Hawaii, Medium", () => (
    <Card picture={"https://wallpaperaccess.com/full/144067.jpg"} alt="whoops" size="medium" />
  ))
  .add("Card, Discover New Groups", () => (
    <Card outline size="medium">
      <a href="/">Discover New Groups</a>
    </Card>
  ))
  .add("Large Card with Small Card inside", () => (
    <div>
      <Card color="purple" size="large">
        <Card color="pink" size="small" />
      </Card>
    </div>
  ))
  .add("Card, Purple, Smedium", () => <Card color="purple" size="extra-small" />)
  .add("Card, Red, Smedium", () => <Card color="red" size="extra-small" />)

  .add("Card, Pink, Mobile, AirPlane", () => (
    <Card color="pink" size="mobile" picture={airplane}>
      <div>
        <h2>Book a Trip</h2>
      </div>
    </Card>
  ))
  .add("Card, Yellow, Mobile, Groups", () => (
    <Card color="yellow" size="mobile" picture={groups}>
      <div>
        <h2>Suggested Groups</h2>
      </div>
    </Card>
  ))
  .add("Card, Purple, Mobile, Hashtags", () => (
    <Card color="purple" size="mobile" picture={trends}>
      <div>
        <h2>Trending Hashtags</h2>
      </div>
    </Card>
  ))
  .add("Card, Red, Mobile, People", () => (
    <Card color="red" size="mobile" picture={people}>
      <div>
        <h2>Suggested People</h2>
      </div>
    </Card>
  ));
