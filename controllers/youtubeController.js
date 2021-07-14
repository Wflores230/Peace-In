const axios = require("axios")

module.exports = {
    getResults: (req, res) => {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${req.params.type}&type=video&key=AIzaSyBKXGaS0dwFOXnn1DhiFpKrE33E-k8veB4`)
            .then(function (response) {
                console.log(response)
                res.json(response.data.items)
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({})
            })
    }
}