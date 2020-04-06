import getAPI from "./util";

export const authorizeUser = () => {
  let url = `${getAPI()}auth/user`;

  fetch(url, {
    headers: {
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      this.setState({
        email: json.email,
        first_name: json.profile.first_name,
        image: json.profile.image,
      });
    });
};
