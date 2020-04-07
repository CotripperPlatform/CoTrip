import getAPI from "./util";
import App from "App";

// var promiseObj = new Promise(executor);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
let promiseObjAuthUser = new Promise(authorizeUser(authToken))

const authorizeUser = (authToken) => {
  let url = `${getAPI()}auth/user`;

  fetch(url, {
    headers: {
      Authorization: `Token ${authToken}`,
    },
  })
    .then((res) => res.json())
    // .then((json) => {
    //   console.log(json);
    //   this.setState({
    //     email: json.email,
    //     first_name: json.profile.first_name,
    //     image: json.profile.image,
    //   });
    // });
};

export function promiseObjAuthUser(authToken)

// App.js becomes:
// import promiseObjAuthUser from "./settings/authorizeUser"

// componentDidMount() {
//     if (this.state.logged_in) {
//       promiseObjAuthUser(localStorage.getItem("token"))
//         .then(json => {
//           console.log(json);
//           if (json.detail == "Invalid token.") {
//             this.handle_logout();
//           } else {
//             this.setState({
//               email: json.email,
//               first_name: json.profile.first_name,
//               image: json.profile.image
//             });
//           }
//         });
//     }
//   }