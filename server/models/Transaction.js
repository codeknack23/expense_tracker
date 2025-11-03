const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  type: { type: String, enum: ['income', 'expense'], required: true },
  amount: { type: Number, required: true },
  description: String,
  category: String,
  date: { type: Date, required: true }
});

module.exports = mongoose.model('Transaction', TransactionSchema);
