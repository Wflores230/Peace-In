const router = require('express').Router();
const userRoutes = require('./users');
const quotesRoutes = require('./quotes');

router.use('/users', userRoutes);
router.use('/quotes', quotesRoutes);

module.exports = router;

// TODO Create routes to fetch an array of quotes from the mongodb and return a response an array of quotes