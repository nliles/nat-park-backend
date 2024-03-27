const express = require("express");
const router = express.Router();
const { getSelectedParks, updateParkDesignation, updateSelectedParks } = require("../park");
const isAuthenticated = require("../middleware/isAuthenticated");

router.route("/users/park").get(isAuthenticated, getSelectedParks);
router.route("/users/park").patch(isAuthenticated, updateParkDesignation);
router.route("/users/park").put(isAuthenticated, updateSelectedParks);

module.exports = router;
