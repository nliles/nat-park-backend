const User = require("./db/model/userModel");
const Park = require("./db/model/parkModel");

// park.js
exports.getParks = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.session.user });
    const park = await Park.findOne({ user });
    return res.status(200).json({ parks: park ? park.parks : {} });
  } catch (e) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

exports.updateParks = async (req, res, next) => {
  const { designation, parks } = req.body;
  const user = await User.findOne({ email: req.session.user });
  const park = await Park.findOne({ user });
  const  query = { user }
  const update = { parks: {
    ...park ? park.parks : {},
    [designation]: parks
  }}
  const options = { upsert: true, new: true, setDefaultsOnInsert: true };
  let parkData;
  try {
    parkData = await Park.findOneAndUpdate(query, update, options);
    return res.status(200).json({ parks: parkData.parks });
  } catch (e) {
    return res.status(400).json({ message: "Fail" });
  }
};
