const rb = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend,  readFromFile } = require('../helper/fs_helper');

rb.get('/', (req, res) => {
    console.log(`${req.method} request recieved for notes`);
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

rb.post('/', (req, res) => {
    console.log(`${req.method} request recieved for notes`);
    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title, 
            text,
            id: uuidv4(),
        }

        readAndAppend(newNote, './db/db.json');
    
        const response = {
            status: 'success',
            body: newNote,
        }

        console.log(response);
        res.json(response);
    }
});

module.exports = rb;