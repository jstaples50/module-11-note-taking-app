const express = require('express');
const path = require('path');
const notesData = require('./db/db.json');

const app = express();
const PORT = process.env.PORT || 3001;



// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// HTML Routes

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')))

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
  });


// API routes

app.get('/api/notes', (req, res) => {
    console.log(req.method);
    res.json(notesData);
})

app.post('/api/notes', (req, res) => {
    console.log(req.method);

    const { title, text } = req.body;

    if (title && text) {
        const newNote = {
            title, 
            text,
            guid: 1234
        }
        
        const response = {
            status: 'success', 
            body: newNote,
        }
        
        console.log(response);
        res.status(201).json(response);
    }
})


// Catch Route

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
    console.log('Make a GET request');
})


app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`);
})