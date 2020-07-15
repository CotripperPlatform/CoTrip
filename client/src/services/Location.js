/*
 * Location
 *
 * Service for interacting with the backend User model.
 *
 */
import { BASE_URL } from "./constants";
import axios from "axios";

export function getUSStates() {
  axios.get(`${BASE_URL}/location/states`).then(res => {
    this.setState({ USStates: res.data });
  });
}

export function getCitiesFromState(event) {
  if (event.target.textContent === "") this.setState({ stateFound: false });

  let USStates = this.state.USStates;

  //TextContent because materialUI outputs an <li> tag
  let userSubmission = event.target.textContent.toLowerCase();

  USStates.forEach(state => {
    if (state.name.toLowerCase() === userSubmission) {
      axios.get(`${BASE_URL}/location/bystate?state__code=${state.code}`).then(res => {
        this.setState({
          stateFound: true,
          currentStateCities: res.data
        });
      });
    }
  });
}
