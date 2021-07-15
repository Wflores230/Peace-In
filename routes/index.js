const router = require('express').Router();
const apiRoutes = require('./api');
const youtubeRoutes = require("./youtube")

router.use("/youtube", youtubeRoutes);
router.use('/api', apiRoutes);

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });


module.exports = router;