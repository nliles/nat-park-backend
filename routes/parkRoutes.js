const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const { getParks, updateParks } = require("../park");
router.route("/park").get(getParks);
router.route("/park").post(updateParks);

module.exports = router;
