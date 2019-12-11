import React from "react";
import { storiesOf } from "@storybook/react";
import ForumPost from "./ForumPost";

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
      post={[{ title: "What An Amazing Trip!" }]}
    />
  ));
