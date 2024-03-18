const express = require("express");
const router = express.Router();
const { getParks, createParks, updateParks } = require("../park");
const isAuthenticated = require("../middleware/isAuthenticated");

router.route("/users/park").get(isAuthenticated, getParks);
router.route("/users/park").post(isAuthenticated, createParks);
router.route("/users/park").patch(isAuthenticated, updateParks);

module.exports = router;
