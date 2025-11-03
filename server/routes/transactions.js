const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');
const validateTransaction = require('../validators/transactionValidator');


router.post('/', async (req, res) => {
  const { error } = validateTransaction(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const tx = new Transaction(req.body);
  await tx.save();
  res.status(201).json(tx);
});


router.get('/', async (req, res) => {
  const { type, category, dateFrom, dateTo } = req.query;
  const filter = {};
  if (type) filter.type = type;
  if (category) filter.category = category;
  if (dateFrom || dateTo) filter.date = {};
  if (dateFrom) filter.date.$gte = new Date(dateFrom);
  if (dateTo) filter.date.$lte = new Date(dateTo);

  const txs = await Transaction.find(filter).sort({ date: -1 });
  res.json(txs);
});


router.put('/:id', async (req, res) => {
  const { error } = validateTransaction(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const updated = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});


router.delete('/:id', async (req, res) => {
  await Transaction.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
