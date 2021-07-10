const router = require('express').Router();
const apiRoutes = require('./api');
const userRoutes = require("./users")
const youtubeRoutes = require("./youtube")

router.use("/users", userRoutes)
router.use("/youtube", youtubeRoutes)
router.use('/api', apiRoutes);

module.exports = router;