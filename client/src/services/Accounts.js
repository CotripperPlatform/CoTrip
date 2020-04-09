/*
 * Accounts
 *
 * Service for interacting with the Django Accounts app.
 *
 */
import { BASE_URL } from "./constants";
const axios = require("axios").default;

export function getSignedRequest(file, folder) {
  axios
    .get(`${BASE_URL}/sign_s3?folder=${folder}&file_type=` + file.type)
    .then(response => {
      this.uploadFile(file, response.data.data, response.data.url);
    })
    .catch(error => alert("Could not get signed URL. " + error));
}
export function uploadFile(file, s3Data, url) {
  let postData = new FormData();
  for (let key in s3Data.fields) {
    postData.append(key, s3Data.fields[key]);
  }
  postData.append("file", file);

  axios
    .post(s3Data.url, postData)
    .then(res => {
      this.setState({ profile: { ...this.state.profile, image: url } });
    })
    .catch(err => {
      alert("Could not upload file.");
    });
}
