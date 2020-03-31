import React from "react";
import { storiesOf } from "@storybook/react";
import ForumPostContainer from "./ForumPostContainer";
import Profile from "../../assets/images/profile-picture-2.png";
import Profile2 from "../../assets/images/card_profile3.png";


const onClick = () => {
  console.log("clicked");
  return;
};
storiesOf("ForumPostContainer", module).add("ForumPostContainer", () => (
  <ForumPostContainer
    forumPost={{
      pillClick: { onClick },
      commentClick: { onClick },
      likeClick: { onClick },
      to: "/",
      name: "Chantal",
      likes: 8,
      comments: 5,
      topics: ["Parenting", "Vacation", "Topic"],
      image:  Profile,
      post: {
        title: "What An Amazing Trip!",
        date: "May 4",
        time: "2:00pm",
        hashtags: [
          { url: "#", title: "Traveling" },
          { url: "#", title: "GoodTimes" }
        ],
        body:
          "My son and I went on this trip and had the greatest time! If you can go, I would highly recommend it!"
      }
    }}
    comment={{
      name: "Lexi R.",
      likes: 2,
      replies: 0,
      image: Profile2,
      date: "May 5 ",
      time: " 4:45pm",
      body:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore v eritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit"
    }}
  />
));
