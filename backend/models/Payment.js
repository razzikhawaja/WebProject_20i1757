const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer', // Assuming a reference to the Customer model
    required: true,
  }
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
