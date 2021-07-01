const express = require('express');
const controller = require('../controllers/tasks')
const router = express.Router();

router.get('/allTasks', controller.getAllTasks);
//localhost:5000/api/tasks/login

router.post('/createTask', controller.addNewTask);
//localhost:5000/api/tasks/login

router.patch('/updateTask', controller.changeTask);
//localhost:5000/api/tasks/login

router.delete('/deleteTask', controller.deleteTask);
//localhost:5000/api/tasks/login

module.exports = router;