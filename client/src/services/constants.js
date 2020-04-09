export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://cotripper-api.herokuapp.com"
    : "http://localhost:8000";
