const API_HOST_LOCAL = "http://localhost:8000/";
const API_HOST = "https://cotripper.herokuapp.com/";
export default function getAPI() {
  if (process.env.NODE_ENV === "development") return API_HOST_LOCAL;
  else return API_HOST;
}

// example usage:
//   import getAPI from "../../services/util";  //make sure path to this file is correct!

//   let urlCats = `${getAPI()}cats/`;
//   axios.get(urlCats).then() //etc...
