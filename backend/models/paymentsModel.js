const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  reservation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reservation',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  method: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    enum: ['pending', 'approved', 'failed']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Payment', PaymentSchema);
