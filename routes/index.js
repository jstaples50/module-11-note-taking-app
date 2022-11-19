//  File to bring in the modular routes

const express = require('express');

// Imported routes
const notesRouter = require('./routes');

const app = express();

// Telling the endpoint /notes to use notesRouter
app.use('/notes', notesRouter);

module.exports = app;

