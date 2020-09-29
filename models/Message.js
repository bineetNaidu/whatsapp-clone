const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
  timestamp: String,
  message: String,
  name: String,
});

module.exports = mongoose.model('Message', MessageSchema);
