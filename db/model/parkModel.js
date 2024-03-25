const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// park schema
const ParkSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  parks: {
    nationalPark: [String],
    nationalBattlefield: [String],
    nationalBattlefieldPark: [String],
    nationalBattlefieldSite: [String],
    nationalMilitaryPark: [String],
    nationalHistoricalPark: [String],
    nationalHistoricSite: [String],
    nationalLakeshore: [String],
    nationalMemorial: [String],
    nationalMonument: [String],
    nationalParkway: [String],
    nationalPreserve: [String],
    nationalReserve: [String],
    nationalRecreationArea: [String],
    nationalRiver: [String],
    nationalScenicTrail: [String],
    nationalSeashore: [String],
    nationalWildAndScenicRiver: [String],
    internationalHistoricSite: [String],
    otherDesignation: [String],
  },
});

// export ParkSchema
const Park = mongoose.model("park", ParkSchema);
module.exports = Park;
