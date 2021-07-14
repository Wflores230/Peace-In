const router = require('express').Router();
const apiRoutes = require('./api');
const youtubeRoutes = require("./youtube")

router.use("/youtube", youtubeRoutes);
router.use('/api', apiRoutes);


module.exports = router;