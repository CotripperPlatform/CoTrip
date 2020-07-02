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
      history.push("/");
    })
    .catch(err => {
      console.log(err);
    });
}

export function handleLogin(data, history) {
  fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(json => {
      console.log(json.token);
      json.token ? localStorage.setItem("token", json.token) : console.log("no token");
      this.setState({
        logged_in: json.token != undefined ? true : false,
        email: json.user.email,
        first_name: json.user.profile.first_name,
        image: json.user.profile.image
      });
      history.push("/");
    })
    .catch(err => {
      console.log(err);
      alert("Please enter valid email and password");
    });
}

export function handleLogout() {
  localStorage.removeItem("token");
  this.setState({ logged_in: false, email: "", first_name: "", image: "" });
}
