import axios from 'axios'

const API = {
    getYoutubeResults: (type) => {
        return axios.get(`/youtube/${type}`)
    }
}

export default API