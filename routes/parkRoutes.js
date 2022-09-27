const jwt = require("jsonwebtoken");
const express = require("express")
const router = express.Router()
const { getParks, updateParks } = require("../park")
const checkAuth = require('../middleware/check-auth')

router.route("/park").get(checkAuth, getParks)
router.route("/park").post(checkAuth, updateParks)

module.exports = router
