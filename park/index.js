const User = require("./db/model/userModel");
const Park = require("./db/model/parkModel");
const jwt = require("jsonwebtoken");

// park.js
exports.getParks = async (req, res, next) => {
  try {
    const email = req.userData.email;
    const park = await Park.findOne({ email });
    return res.status(200).json({ parks: park.parkIds });
  } catch (e) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

exports.updateParks = async (req, res, next) => {
  const { parks } = req.body;
  try {
    const query = { email: req.userData.email };
    const update = { parkIds: parks };
    const parkData = await Park.findOneAndUpdate(query, update, {
      new: true,
    });
    return res.status(200).json({ parks: parkData.parkIds });
  } catch (e) {
    return res.status(400).json({ message: "Fail" });
  }
};
