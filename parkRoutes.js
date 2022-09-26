const jwt = require("jsonwebtoken");
const express = require("express")
const router = express.Router()
const { getParks } = require("./park")

function validateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.tokenData = decoded;
    next();
  });
}

router.route("/parks").get(getParks)

module.exports = router
