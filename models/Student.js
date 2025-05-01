const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    default: false
  },
  registeredEvents: [
    {
      eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
      },
      eventName: {
        type: String
      },
      registrationDate: {
        type: Date,
        default: Date.now
      },
      paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid'],
        default: 'Pending'
      },
      teamName: {
        type: String
      },
      teamMembers: [
        {
          type: String
        }
      ]
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Student', StudentSchema); 