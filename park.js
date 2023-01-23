const User = require("./db/model/userModel");
const Park = require("./db/model/parkModel");

const errorMsg = "Something went wrong"

exports.getParks = async (req, res, next) => {
  try {
    const user = await User.findOne({ id: req.session.user });
    const park = await Park.findOne({ user });
    return res.status(200).json({ parks: park ? park.parks : {} });
  } catch (e) {
    return res.status(500).json({ message: errorMsg });
  }
};

exports.createParks = async (req, res, next) => {
  const { designation, parks } = req.body;
  const user = await User.findOne({ id: req.session.user });
  try {
    const parkData = await Park.create({ user, parks: { [designation]: parks }});
    return res.status(200).json({ parks: parkData.parks });
  } catch (e) {
    return res.status(500).json({ message: errorMsg });
  }
};

exports.updateParks = async (req, res, next) => {
  const { designation, parks } = req.body;
  const user = await User.findOne({ id: req.session.user });
  const query = { user };
  const update = {$set: {["parks." + designation]: parks}}
  const options = { upsert: true, new: true, setDefaultsOnInsert: true };
  try {
    const parkData = await Park.findOneAndUpdate(query, update, options);
    return res.status(200).json({ parks: parkData.parks });
  } catch (e) {
    return res.status(500).json({ message: errorMsg });
  }
};
