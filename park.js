const User = require("./db/model/userModel");
const Park = require("./db/model/parkModel");
const jwt = require("jsonwebtoken");

// park.js
exports.getParks = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.userData.user });
    const park = await Park.findOne({ user });
    return res.status(200).json({ parks: park ? park.parkIds : [] });
  } catch (e) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

exports.updateParks = async (req, res, next) => {
  const { parks } = req.body;
  const user = await User.findOne({ email: req.userData.user });
  const park = await Park.findOne({ user });
  let parkData;
  try {
    if (park) {
      parkData = await Park.findOneAndUpdate({ user }, { parkIds: parks }, {
        new: true,
      });
    } else {
      parkData = await Park.create({
        user,
        parkIds: parks
      });
      parkData = parkData.json()
    }
    return res.status(200).json({ parks: parkData.parkIds || [] });
  } catch (e) {
    return res.status(400).json({ message: "Fail" });
  }
};
