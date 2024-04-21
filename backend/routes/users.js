// routes/users.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST /api/users/register
router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Check if the email is already registered
    console.log(req.body);
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    // Create a new user
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json(newUser);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if the email is already registered
    console.log(req.body);
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    res.status(400).json('Please sign in ');
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});
module.exports = router;
