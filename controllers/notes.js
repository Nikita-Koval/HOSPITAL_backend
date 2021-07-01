const Note = require('../db_models/Notes');

module.exports.getAllNotes = async (req, res) => {
  await Note.find().then(result => {
    res.send(result)
  });
};

module.exports.addNewNote = async (req, res) => {
  const note = new Note(req.body);
  await note.save().then(result => {
    res.send(result);
  });
};

module.exports.changeNote = (req, res) => {
  Note.updateOne({_id: req.body._id}, req.body).then(result => {
    Note.find({_id: req.body._id}).then(result => {
      res.send(result)
    });
  });
};

module.exports.deleteNote = (req, res) => {
  Note.deleteOne({_id: req.body._id}).then(result => {
    Note.find().then(result => {
      res.send(result)
    });
  });
};