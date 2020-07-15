/*
 * Group
 *
 * Service for interacting with the backend User model.
 *
 */
import { BASE_URL } from "./constants";
import axios from "axios";

export function createGroup() {
  if (this.state.location == null) {
    alert("You must select a valid city before continuing.");
    return;
  } else if (this.state.title == "") {
    alert("Please enter a title before continuing.");
  } else if (this.state.description == "") {
    alert("Please enter a description before continuing.");
  } else {
    axios({
      method: "POST",
      url: `${BASE_URL}/groups`,
      data: {
        title: this.state.title,
        description: this.state.description,
        location: this.state.location
      }
    }).then(this.props.history.push("/community/join-groups"));
  }
}
