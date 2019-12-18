import React from "react";
import { storiesOf } from "@storybook/react";
import InboxMessage from "./InboxMessage";
import defaultPic from "assets/images/profile-picture-1.png";

const conversation1 = {
  thread: [
    {
      message: "Hey, girl! Just wanted to see if you are going on this trip.",
      user: "props.users[0]"
    }
  ],
  users: [{ name: "Justine", profilePic: defaultPic, to: "/" }]
};
const conversation2 = {
  thread: [
    {
      message: "Hey, girl! Just wanted to see if you are going on this trip.",
      user: "props.users[0]"
    },
    {
      message: "NO!",
      user: "props.user[1]"
    }
  ],
  users: [
    { name: "Justine", profilePic: defaultPic, to: "/" },
    { name: "Michelle", profilePic: defaultPic, to: "/" }
  ]
};
const conversation3 = {
  thread: [
    {
      message: "Hey, girl! Just wanted to see if you are going on this trip.",
      user: "Justine"
    }
  ],
  users: [
    { name: "Justine", profilePic: defaultPic, to: "/" },
    { name: "Michelle", profilePic: defaultPic, to: "/" },
    { name: "Becky", profilePic: defaultPic, to: "/" }
  ]
};
const conversation4 = {
  thread: [
    {
      message: "Hey, girl! Just wanted to see if you are going on this trip.",
      user: "props.users[0]"
    },
    {
      message: "NO!",
      user: "props.user[1]"
    }
  ],
  users: [
    { name: "Justine", profilePic: defaultPic, to: "/" },
    { name: "Michelle", profilePic: defaultPic, to: "/" },
    { name: "Becky", profilePic: defaultPic, to: "/" },
    { name: "Bola", profilePic: defaultPic, to: "/" }
  ]
};
const conversation5 = {
  thread: [
    {
      message: "Hey, girl! Just wanted to see if you are going on this trip.",
      user: "props.users[0]"
    },
    {
      message: "NO!",
      user: "props.user[1]"
    }
  ],
  users: [
    { name: "Justine", profilePic: defaultPic, to: "/" },
    { name: "Michelle", profilePic: defaultPic, to: "/" },
    { name: "Becky", profilePic: defaultPic, to: "/" },
    { name: "Bola", profilePic: defaultPic, to: "/" },
    { name: "Justine", profilePic: defaultPic, to: "/" },
    { name: "Michelle", profilePic: defaultPic, to: "/" },
    { name: "Becky", profilePic: defaultPic, to: "/" },
    { name: "Bola", profilePic: defaultPic, to: "/" }
  ]
};
storiesOf("InboxMessage", module)
  .add("No Props", () => <InboxMessage />)
  .add("1 Person", () => <InboxMessage conversation={conversation1} />)
  .add("2 People", () => <InboxMessage conversation={conversation2} />)
  .add("3 People", () => <InboxMessage conversation={conversation3} />)
  .add("4 People", () => <InboxMessage conversation={conversation4} />)
  .add("8 People", () => <InboxMessage conversation={conversation5} />);
