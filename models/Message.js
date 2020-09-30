const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  message: { type: String, required: true },
  name: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  received: { type: Boolean, default: false },
});

module.exports = mongoose.model('Message', MessageSchema);
