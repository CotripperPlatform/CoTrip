/*
 * Forum
 *
 * Service for interacting with the Django Forum.
 *
 */
import { BASE_URL } from "./constants";
import axios from 'axios';


export default function getHashtags(){
    axios.get(`${BASE_URL}/hashtags`)
    .then(response => {
      this.setState({ 
        hashtags: response.data
      })
    })
    .catch(error => {
      console.log('Error', error);
    })
}
