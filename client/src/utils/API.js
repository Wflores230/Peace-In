import axios from 'axios'

const API = {
    getYoutubeResults: (type) => {
        return axios.get(`/app/youtube/${type}`)
    },
    getQuotesResults: () => {
        return axios.get(`/api/quotes/`)
    }
}

export default API