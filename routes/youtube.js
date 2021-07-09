const router = require("express").Router()

const youtubeController = require("../controllers/youtubeController")

router.route("/:type")
    .get(youtubeController.getResults)

module.exports = router;