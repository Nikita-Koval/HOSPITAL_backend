const Task = require('../db_models/Tasks');

module.exports.getAllTasks = async (req, res) => {
  await Task.find().then(result => {
    res.send(result)
  });
};

module.exports.addNewTask = async (req, res) => {
  const task = new Task(req.body); //req.body заменил на req.query
  await task.save().then(result => {
    res.send(result);
  });
};

module.exports.changeTask = (req, res) => {
  Task.updateOne({_id: req.body._id}, req.body).then(result => {
    Task.find({_id: req.body._id}).then(result => {
      res.send(result)
    });
  });
}; //работает через внесение параметров postman body

module.exports.deleteTask = (req, res) => {
  Task.deleteOne({_id: req.query._id}).then(result => {
    Task.find().then(result => {
      res.send(result)
    });
  });
};