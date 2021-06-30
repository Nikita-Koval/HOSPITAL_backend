const mongoose = require('mongoose');

const { Schema } = mongoose;

const tasksSchema = new Schema({
  name: String,
  medic: String,
  date: Number,
  complaints: String
});

module.exports = User = mongoose.model('Tasks_info', tasksSchema);