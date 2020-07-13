import { BASE_URL } from "./constants";
import axios from 'axios';


export function getHashtagData(groupId) {
    console.log(groupId = 1)
    if (groupId !== undefined) {
        axios.get(`${BASE_URL}/groups/${groupId}`,
            {
                headers: {
                    Authorization: `Token ${localStorage.getItem("token")}`
                }
            })
            .then(res => {
                console.log(res)
                this.setState({
                    hashtagData: res.data
                })
            })
            .catch(res => console.log(res))
    }
}

export function getAllHashtags() {
    axios.get(`${BASE_URL}/hashtags`,
        {
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`
            }
        })
        .then(res => {

            this.setState({
                hashtagList: res.data
            })
        })
        .catch(res => console.log(res))
}
