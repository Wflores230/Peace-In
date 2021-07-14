import axios from 'axios'

const API = {
    getYoutubeResults: (type) => {
<<<<<<< working-on-seeds
        return axios.get(`/app/youtube/${type}`)
    },
    getQuotesResults: () => {
        return axios.get(`/api/quotes/`)
=======
        return axios.get(`/youtube/${type}`)
>>>>>>> main
    }
}

export default API