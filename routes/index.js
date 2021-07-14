const router = require('express').Router();
const apiRoutes = require('./api');
const userRoutes = require("./api/users");
const quotesRoutes = require('./api/quotes');
const youtubeRoutes = require("./youtube")

router.use("/users", userRoutes);
router.use("/quotes", quotesRoutes);
router.use("/youtube", youtubeRoutes);
router.use('/api', apiRoutes);


module.exports = router;