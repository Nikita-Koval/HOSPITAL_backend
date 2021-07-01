const express = require('express');
const controller = require('../controllers/notes')
const router = express.Router();

router.get('/allNotes', controller.getAllNotes);
//localhost:5000/api/notes/allNotes

router.post('/createNote', controller.addNewNote);
//localhost:5000/api/notes/createNote

router.patch('/updateNote', controller.changeNote);
//localhost:5000/api/notes/updateNote

router.delete('/deleteNote', controller.deleteNote);
//localhost:5000/api/notes/deleteNote

module.exports = router;