const mongoose = require('mongoose');

const tourAgentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  blocked: {
    type: Boolean,
    default: false,
  },
});

const TourAgent = mongoose.model('TourAgent', tourAgentSchema);

module.exports = TourAgent;
