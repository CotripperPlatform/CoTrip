import axios from 'axios';
import { BASE_URL } from './constants';

export default function getMemberData(userId) {

    if (userId !== undefined) {
        axios.get(`${BASE_URL}/profile/${userId}`,
            {
                headers: {
                    Authorization: `Token ${localStorage.getItem("token")}`
                }
            })
            .then(res => {
                this.setState({
                    protectedProfileData: {
                        first_name: res.data.first_name,
                        last_name: res.data.last_name,
                        bio: res.data.bio,
                        age: res.data.age,
                        image: res.data.image,
                        city_of_residence: res.data.city_of_residence,
                        social_media: res.data.social_media,
                        user_id: res.data.user_id,
                        hashtags: res.data.hashtags,
                        connections: res.data.connections
                    }
                })
            })
            .catch(res => console.log(res))
    }
}

export function getSocialMediaOptions() {
    axios.get(`${BASE_URL}/social_media_type`,
        {
            headers: {
                Authorization: `Token ${localStorage.getItem("token")}`
            }
        })
        .then(res => {
            this.setState(prevState => ({
                socialMediaOptions: [...prevState.socialMediaOptions, ...res.data]
            }))
        })
        .catch(error => console.log(error))
}

export function updateSocialMediaList(event, mediaId) {
    let username = event.target.value
    let media = this.state.socialMediaOptions.filter(option => option.id === mediaId)[0]
    let option = {
        profile: this.props.userid, // userid
        social_media_type: {
            id: mediaId,
            name: media.name,
        },
        url: `https://www.${media.name.toLowerCase()}.com/${username}`
    }
    let prevMediaList = [...this.state.form_social_media]
    let prevMedia = prevMediaList.filter(media => media.social_media_type.id !== mediaId)

    this.setState({
        form_social_media: [...prevMedia, option]
    })
}

export function submitUserUpdates() {
    axios({
        method: 'PATCH',
        url: `${BASE_URL}/profile/${this.props.userid}`,
        headers: {
            Authorization: `Token ${localStorage.getItem("token")}`
        },
        data: {
            first_name: this.state.form_first_name,
            last_name: this.state.form_last_name,
            bio: this.state.form_bio,
            social_media: this.state.form_social_media,
        }
    })
        .then(res => {

            this.setState({
                updateSubmitted: true
            })
            this.toggleEditMode();
        })
        .catch(err => console.log(err))

}
