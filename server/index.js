require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const transactionsRouter = require('./routes/transactions');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/transactions', transactionsRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Server error' });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () => console.log(`Server on port ${process.env.PORT}`));
  })
  .catch((err) => console.error('Mongo connection error:', err));
