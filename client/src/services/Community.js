import { BASE_URL } from "./constants";
import axios from 'axios';


export function getHashtagData() {
    if (this.state.groupId !== undefined) {
        axios.get(`${BASE_URL}/groups/${this.state.groupId}`,
            {
                headers: {
                    Authorization: `Token ${localStorage.getItem("token")}`
                }
            })
            .then(res => {

                this.setState({
                    groupData: res.data
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
                groupList: res.data
            })
        })
        .catch(res => console.log(res))
}
