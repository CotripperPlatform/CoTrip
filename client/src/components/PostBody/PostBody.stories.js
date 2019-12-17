import React from "react";
import { storiesOf } from "@storybook/react";
import PostBody from "./PostBody";

storiesOf("PostBody", module)
  .add("Default", () => <PostBody />)
  .add("Custom Post", () => (
    <PostBody
      title="What An Amazing Trip!"
      date="May 3"
      time="2:00 pm"
      hashtags={[
        { url: "#", title: "DCMoms" },
        { url: "#", title: "Hashtags" },
        { url: "#", title: "CoTrippers" }
      ]}
      body="Lorem ipsum dolor sit amet, mei autem patrioque cu, pri at omittam incorrupte. Dico rationibus assueverit vis te. Vidit exerci facilisis ne qui. Ei sed partem dissentias, ea pri sanctus partiendo vituperatoribus, ei erant graeco nam. Eu vix nostro voluptua. Ut case possit sed, duo malorum omnesque liberavisse ei."
    />
  ));