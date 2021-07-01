const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const authRoutes1 = require('./routes/tasks');

const app = express();

app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require('cors')());

const url = "mongodb+srv://nkovalexceed:myst0347cl98@cluster0.1pxcu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true});

app.use('/api/auth', authRoutes);
app.use('/api/tasks', authRoutes1);



module.exports = app;