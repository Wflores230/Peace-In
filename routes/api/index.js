const router = require('express').Router();
const userRoutes = require('./users');
const quotesRoutes = require('./quotes');

router.use('/users', userRoutes);
router.use('/quotes', quotesRoutes);

module.exports = router;