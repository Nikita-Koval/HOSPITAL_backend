const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport')
const authRoutes = require('./routes/auth');
const noteRoutes = require('./routes/notes');

const app = express();

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')());

const url = "mongodb+srv://nkovalexceed:myst0347cl98@cluster0.1pxcu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);

module.exports = app;