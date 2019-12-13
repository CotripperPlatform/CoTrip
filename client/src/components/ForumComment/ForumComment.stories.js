import React from "react";
import { storiesOf } from "@storybook/react";
import ForumComment from "./ForumComment";
import Profile from "../../assets/images/card_profile3.png";

storiesOf("ForumComment", module)
    .add("ForumComment", () => (
    <ForumComment
      name="Lexi R."
      likes={2}
      comments={5}
      image={Profile}
      date="May 5"
      time= "4:45pm"
      body= "That sounds like a great time! I hope my kids and I can do something like that this summer!"
    />
    ))