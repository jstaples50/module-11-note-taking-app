const fs = require('fs');
const util = require('util');

// Functions to read, write, and append to files

const writeToFile = (destination, content) =>
fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
);

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        const parsedData = JSON.parse(data);
        parsedData.push(content);
        writeToFile(file, parsedData);
      }
    });
  };

  const deleteNoteFromFile = (id, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        let parsedData = JSON.parse(data);
        const deleted = parsedData.find(note => note.id === id);
        console.log(deleted);
        parsedData = parsedData.filter(note => note.id !== id);
        writeToFile(file, parsedData);
      }
    })
  }


  const readFromFile = util.promisify(fs.readFile);




  module.exports = { readAndAppend, readFromFile, deleteNoteFromFile };