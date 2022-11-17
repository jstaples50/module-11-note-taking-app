const express = require('express');

const notesRouter = require('./routes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;

