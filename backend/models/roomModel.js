const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  roomNumber: {
    type: String,
    required: true,
    unique: true
  },
  roomType: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  numberOfBeds: {
    type: Number,
    required: true
  },
  maxOccupancy: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Room', RoomSchema);
