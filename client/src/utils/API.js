import axios from 'axios'

const API = {
    getYoutubeResults: (type) => {
        return axios.get(`/app/youtube/${type}`)
    }
}

export default API