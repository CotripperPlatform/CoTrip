/*
 * Forum
 *
 * Service for interacting with the Django Forum.
 *
 */
import { BASE_URL } from "./constants";
import axios from 'axios';


export default function getTopics(){
    axios.get(`${BASE_URL}/topics`)
    .then(response => {
      this.setState({ 
        topics: response.data
      })
    })
    .catch(error => {
      console.log('Error', error);
    })
}