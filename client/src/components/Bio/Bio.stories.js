import React from "react";
import { storiesOf } from "@storybook/react";
import Bio from "./Bio";

let people = [
  {
    name: "Suzie",
    bio:
      "Nec et iriure utamur, per ubique mnesarchum an. At mei exerci voluptaria suscipiantur, ornatus consulatu interesset mei id. Ea possim percipit recteque his. Mea id ludus alterum apeirian, alienum dissentiet ut estLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    hashtags: ["#parenting", "#teenages", "#health&wellness", "#Hawaii2020"],
    facebook: "www.facebook.com",
    instagram: "www.instagram.com",
    pinterest: "www.pinterest.com",
    isCurrentUser: true
  },
  { name: "Martha", bio: "sup yall" }
];

storiesOf("Layout/Bio", module).add("Default", () => (
  <Bio
    instagram={people[0].intagram}
    facebook={people[0].facebook}
    pinterest={people[0].pinterest}
    type="default"
    name={people[0].name}
    bio={people[0].bio}
    hashtags={people[0].hashtags}
    isCurrentUser={people[0].isCurrentUser}
    onClick={console.log("Hello")}
  />
));
