require('dotenv').config();
const express = require('express');
const cors = require('cors');
const contactRouter = require('./routes/contact');

const app = express();

const allowedOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map((origin) => origin.trim())
  : undefined;

app.use(cors({ origin: allowedOrigins || true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(['/health', '/healthz'], (req, res) => {
  res.type('text/plain').send('OK');
});

app.use('/contact', contactRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

module.exports = app;
