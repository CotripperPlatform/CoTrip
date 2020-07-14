import { BASE_URL } from "./constants";
import axios from 'axios';


export function getHashtagData() {
    if (this.state.hashtagId !== undefined) {
        axios.get(`${BASE_URL}/hashtags/${this.state.hashtagId}`,
            {
                headers: {
                    Authorization: `Token ${localStorage.getItem("token")}`
                }
            })
            .then(res => {
                this.setState({
                    hashtagData: res.data
                })
            })
            .catch(res => console.log(res))
    }
}

export function getAllHashtags(callback = null) {
    axios.get(`${BASE_URL}/hashtags`,
        {
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`
            }
        })
        .then(res => {

            this.setState({
                hashtagList: res.data
            }, callback)
        })
        .catch(res => console.log(res))
}
