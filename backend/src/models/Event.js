const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  eventType: {
    type: String,
    required: true,
    enum: ['workshop', 'competition', 'hackathon', 'talk', 'panel']
  },
  capacity: {
    type: Number,
    required: true
  },
  registrationFee: {
    type: Number,
    default: 0
  },
  prizes: {
    type: [String],
    default: []
  },
  requirements: {
    type: [String],
    default: []
  },
  isTeamEvent: {
    type: Boolean,
    default: false
  },
  teamSize: {
    min: { type: Number, default: 1 },
    max: { type: Number, default: 1 }
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event; 