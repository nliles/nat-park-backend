const express = require("express");
const router = express.Router();
const {
  getSelectedParks,
  updateParkDesignation,
  updateSelectedParks,
} = require("../api/park");
const isAuthenticated = require("../middleware/isAuthenticated");

router.route("/park").get(isAuthenticated, getSelectedParks);
router.route("/park").patch(isAuthenticated, updateParkDesignation);
router.route("/park").put(isAuthenticated, updateSelectedParks);

module.exports = router;
