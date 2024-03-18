const express = require("express");
const router = express.Router();
const { getParks, updateParkDesignation } = require("../park");
const isAuthenticated = require("../middleware/isAuthenticated");

router.route("/users/park").get(isAuthenticated, getParks);
router.route("/users/park").patch(isAuthenticated, updateParkDesignation);
// router.route("/users/park").put(isAuthenticated, updateParks);

module.exports = router;
