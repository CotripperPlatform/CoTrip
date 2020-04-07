const API_HOST =
  process.env.NODE_ENV === "production"
    ? "https://cotripper.herokuapp.com/"
    : "http://localhost:8000/";

export default function getAPI() {
  return API_HOST;
}
