const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
  name: {
    type: String,

  },
  email: {
    type: String,
    unique: true,
  },

  dateOfBirth: {
    type: Date,
  }
});

module.exports = mongoose.model('Author', authorSchema);
