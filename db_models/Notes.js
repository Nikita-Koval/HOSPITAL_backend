const mongoose = require('mongoose');

const { Schema } = mongoose;

const notesSchema = new Schema({
  name: String,
  medic: String,
  date: String,
  complaints: String
});

module.exports = Note = mongoose.model('Notes_info', notesSchema);