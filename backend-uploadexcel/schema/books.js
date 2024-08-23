const mongoose = require('mongoose');

const booksSchema = mongoose.Schema({
  name: {
    type: String,

  },
  isbncode: {
    type: String,
    unique: true,
    // match: [/^\d{10}(\d{3})?$/, 'ISBN code must be either 10 or 13 digits']
  },
  authorid: {
    type: String,
  }
});

module.exports = mongoose.model('Books', booksSchema);
