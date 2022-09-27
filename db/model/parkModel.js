const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// park schema
const ParkSchema = new mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  parkIds: [String],
});

// export ParkSchema
const Park = mongoose.model('park', ParkSchema);
module.exports = Park;
