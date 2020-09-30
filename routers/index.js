const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.get('/sync', async (req, res) => {
  try {
    const msg = await Message.find();
    res.status(200).json({
      success: true,
      data: msg,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      err: err.message,
    });
  }
});

router.post('/new', async (req, res) => {
  try {
    const msg = await Message.create(req.body);
    res.status(201).json({
      success: true,
      data: msg,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      err: err.message,
    });
  }
});

module.exports = router;
