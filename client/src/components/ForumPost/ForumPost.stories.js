import React from "react";
import { storiesOf } from "@storybook/react";
import ForumPost from "./ForumPost";
import Profile from "../../assets/images/profile-picture-2.png";

const onClick = () => {
  console.log("clicked");
  return;
};
storiesOf("ForumPost", module)
  .add("Default", () => (
    <ForumPost pillClick={onClick} commentClick={onClick} likeClick={onClick} to="/" />
  ))
  .add("Forum Post with Custom Props", () => (
    <ForumPost
      pillClick={onClick}
      commentClick={onClick}
      likeClick={onClick}
      to="/"
      name="Chantal"
      likes={8}
      comments={5}
      topics={["Parenting", "Vacation", "Topic"]}
      image={Profile}
      post={{
        title: "What An Amazing Trip!",
        date: "May 4",
        time: "2:00pm",
        hashtags: [
          { url: "#", title: "Traveling" },
          { url: "#", title: "GoodTimes" }
        ],
        body:
          "My son and I went on this trip and had the greatest time! If you can go, I would highly recommend it!"
      }}
    />
  ));
