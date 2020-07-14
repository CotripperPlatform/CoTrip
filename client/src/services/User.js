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

      let image = !json.user.profile.image ? require('../assets/images/profile_default.svg') : json.user.profile.image

      this.setState({
        logged_in: json.token != undefined ? true : false,
        email: json.user.email,
        first_name: json.user.profile.first_name,
        image: image,
        profileLoaded: true,
        userid: json.user.id
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
      json.token ? localStorage.setItem("token", json.token) : console.log("no token");
      let image = !json.user.profile.image ? require('../assets/images/profile_default.svg') : json.user.profile.image

      this.setState({
        logged_in: json.token != undefined ? true : false,
        email: json.user.email,
        first_name: json.user.profile.first_name,
        image: image,
        profileLoaded: true,
        userid: json.user.id
      });
      history.push("/");
    })
    .catch(err => {
      console.log(err);
      alert("Please enter valid email and password");
    });
}

export function getUserData() {
  fetch(`${BASE_URL}/auth/user`, {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`
    }
  })
    .then(res => res.json())
    .then(json => {
      if (json.detail == "Invalid token.") {
        this.handleLogout();
      } else {
        let image = !json.profile.image ? require('../assets/images/profile_default.svg') : json.profile.image

        this.setState(
          {
            email: json.email,
            first_name: json.profile.first_name,
            image: image,
            userid: json.id,
            profileLoaded: true
          },
        );
      }
    });
}

export function handleLogout() {
  localStorage.removeItem("token");
  this.setState({ logged_in: false, email: "", first_name: "", image: "" });
}
