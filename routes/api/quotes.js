const router = require("express").Router();
const quotesController = require("../../controllers/quotesController");

// Matches with "/api/books"
router.route("/")
  .get(quotesController.findAll)
  .post(quotesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(quotesController.findById)
  .put(quotesController.update)
  .delete(quotesController.remove);

module.exports = router;
