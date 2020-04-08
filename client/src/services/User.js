/*
 * User
 *
 * Service for interacting with the backend User model.
 *
 */
import { BASE_URL } from "./constants";

export function handleSignup(data, history) {
  fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(json => {
      json.token ? localStorage.setItem("token", json.token) : console.log("no token");
      this.setState({
        logged_in: json.token != undefined ? true : false,
        email: json.user.email,
        first_name: json.user.profile.first_name,
        image: json.user.profile.image
      });
      history.push("/home");
    })
    .catch(err => {
      console.log(err);
    });
}
