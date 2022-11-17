const express = require('express');
const path = require('path');
const api = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3001;



// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));

// HTML Routes

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')))

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
  });

// Catch Route

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'))
    console.log('Make a GET request');
})


app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`);
})