import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./Card";
import image from "../../assets/images/card_small3.png"; //here for example

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
  ));
