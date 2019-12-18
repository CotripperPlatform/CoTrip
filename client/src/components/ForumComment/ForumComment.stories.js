import React from "react";
import { storiesOf } from "@storybook/react";
import ForumComment from "./ForumComment";
import Profile from "../../assets/images/card_profile3.png";

storiesOf("ForumComment", module).add("ForumComment", () => (
  <ForumComment
    name="Lexi R."
    likes={2}
    replies={0}
    image={Profile}
    date="May 5 "
    time=" 4:45pm"
    body="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore v eritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit"
  />
));
