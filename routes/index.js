const router = require("express").Router()
const userRoutes = require("./users")
const youtubeRoutes = require("./youtube")

router.use("/users", userRoutes)
router.use("/youtube", youtubeRoutes)

module.exports = router;