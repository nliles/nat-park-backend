const express = require("express");
const router = express.Router();
const { getParks, createParks, updateParks } = require("../park");
const isAuthenticated = require("../middleware/isAuthenticated");

router.route("/park").get(isAuthenticated, getParks);
router.route("/park").post(isAuthenticated, createParks);
router.route("/park").patch(isAuthenticated, updateParks);

module.exports = router;
