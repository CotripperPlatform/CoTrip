import React from "react";
import { storiesOf } from "@storybook/react";
import MediaCard from "./MediaCard";
import books from "../../assets/images/media-card-1.png";
import happiness from "../../assets/images/media-card-2.png";
import van from "../../assets/images/media-card-3.png";
import nightSky from "../../assets/images/media-card-4.png";
import waterfall from "../../assets/images/media-card-5.png";
import flight from "../../assets/images/media-card-6.png";

export default {
  title: "Layout/Cards/Media Card"
};

storiesOf("Layout/Cards/Media Card", module)
  .add("Default", () => <MediaCard />)
  .add("Small Books", () => (
    <MediaCard size="small" to="User/:userid/" imageSrc={books} footerText="Posted By: --user--" />
  ))
  .add("Small Happiness", () => (
    <MediaCard
      size="small"
      to="User/:userid/"
      imageSrc={happiness}
      footerText="Posted By: --user--"
    />
  ))
  .add("Small Van", () => (
    <MediaCard size="small" to="User/:userid/" imageSrc={van} footerText="Posted By: --user--" />
  ))
  .add("Small Night Sky", () => (
    <MediaCard
      size="small"
      to="User/:userid/"
      imageSrc={nightSky}
      footerText="Posted By: --user--"
    />
  ))
  .add("Small Waterfall", () => (
    <MediaCard
      size="small"
      to="User/:userid/"
      imageSrc={waterfall}
      footerText="Posted By: --user--"
    />
  ))
  .add("Small Flight", () => (
    <MediaCard size="small" to="User/:userid/" imageSrc={flight} footerText="Posted By: --user--" />
  ))
  .add("Medium Books", () => (
    <MediaCard size="medium" to="User/:userid/" imageSrc={books} footerText="Posted By: --user--" />
  ))
  .add("Medium Happiness", () => (
    <MediaCard
      size="medium"
      to="User/:userid/"
      imageSrc={happiness}
      footerText="Posted By: --user--"
    />
  ))
  .add("Medium Van", () => (
    <MediaCard size="medium" to="User/:userid/" imageSrc={van} footerText="Posted By: --user--" />
  ))
  .add("Medium Night Sky", () => (
    <MediaCard
      size="medium"
      to="User/:userid/"
      imageSrc={nightSky}
      footerText="Posted By: --user--"
    />
  ))
  .add("Medium Waterfall", () => (
    <MediaCard
      size="medium"
      to="User/:userid/"
      imageSrc={waterfall}
      footerText="Posted By: --user--"
    />
  ))
  .add("Medium Flight", () => (
    <MediaCard
      size="medium"
      to="User/:userid/"
      imageSrc={flight}
      footerText="Posted By: --user--"
    />
  ))
  .add("Large Books", () => (
    <MediaCard size="large" to="User/:userid/" imageSrc={books} footerText="Posted By: --user--" />
  ))
  .add("Large Happiness", () => (
    <MediaCard
      size="large"
      to="User/:userid/"
      imageSrc={happiness}
      footerText="Posted By: --user--"
    />
  ))
  .add("Large Van", () => (
    <MediaCard size="large" to="User/:userid/" imageSrc={van} footerText="Posted By: --user--" />
  ))
  .add("Large Night Sky", () => (
    <MediaCard
      size="large"
      to="User/:userid/"
      imageSrc={nightSky}
      footerText="Posted By: --user--"
    />
  ))
  .add("Large Waterfall", () => (
    <MediaCard
      size="large"
      to="User/:userid/"
      imageSrc={waterfall}
      footerText="Posted By: --user--"
    />
  ))
  .add("Large Flight", () => (
    <MediaCard size="large" to="User/:userid/" imageSrc={flight} footerText="Posted By: --user--" />
  ));
