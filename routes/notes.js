const express = require('express');
const passport = require('passport')
const controller = require('../controllers/notes')
const router = express.Router();

router.get('/allNotes', passport.authenticate('jwt', {session: false}), controller.getAllNotes);
//localhost:5000/api/notes/allNotes

router.post('/createNote', passport.authenticate('jwt', {session: false}), controller.addNewNote);
//localhost:5000/api/notes/createNote

router.patch('/updateNote', passport.authenticate('jwt', {session: false}), controller.changeNote);
//localhost:5000/api/notes/updateNote

router.delete('/deleteNote', passport.authenticate('jwt', {session: false}), controller.deleteNote);
//localhost:5000/api/notes/deleteNote

module.exports = router;