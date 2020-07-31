const { addThought, getThoughts } = require("../controllers/thoughtController"),
  express = require("express"),
  router = express.Router();

router.post("/addThought", addThought);
router.get("/getThoughts", getThoughts);

module.exports = router;
