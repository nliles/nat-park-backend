const express = require("express");
const router = express.Router();
const { getNPSParks } = require("../api/npsParks");

router.route("/").get(getNPSParks);

module.exports = router;
