const express = require("express");
const router = express.Router();
const { getNPSParks } = require("../npsParks");

router.route("/park").get(getNPSParks);

module.exports = router;
