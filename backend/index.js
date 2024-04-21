// index.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const { mongoURI } = require('./config/keys');

const app = express();

// Body parser middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.use('/api/users/', userRoutes);

// Start server
const port = process.env.PORT || 8084;
app.listen(port, () => console.log(`Server running on port ${port}`));
