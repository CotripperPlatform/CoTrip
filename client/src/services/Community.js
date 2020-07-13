import { BASE_URL } from "./constants";
import axios from 'axios';


export function getHashtagData(hashtagId) {
    console.log(hashtagId = 1)
    if (hashtagId !== undefined) {
        axios.get(`${BASE_URL}/hashtags/${hashtagId}`,
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
