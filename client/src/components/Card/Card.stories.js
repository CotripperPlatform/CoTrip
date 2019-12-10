import React from "react";
import { storiesOf } from "@storybook/react";
import Card from "./Card";
import image from "../../../../assets/images/card_small3.png"; //here for example

storiesOf("Card", module)
  .add("Info Card, Purple", () => <Card color="purple" size="large" />)
  .add("Info Card, Purple, Small", () => <Card color="purple" size="small" />)
  .add("Info Card, Pink", () => <Card color="pink" size="large" />)
  .add("Info Card, Pink, Small", () => <Card color="pink" size="small" />)
  .add("Info Card, Blank", () => <Card size="large" />)
  .add("Info Card, Blank, Small", () => <Card size="small" />)
  .add("Info Card, Picture BG, Large", () => <Card picture={image} alt="whoops" size="medium" />)
  .add("Info Card, Picture Hawaii, Large", () => (
    <Card picture={"https://wallpaperaccess.com/full/144067.jpg"} alt="whoops" size="medium" />
  ));
