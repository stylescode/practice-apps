require("dotenv").config();
const express = require("express");
const cors = require('cors');
const path = require("path");
const database = require('./db.js');

const app = express();

// Serves up all static and generated assets in in a specified folder.
app.use(express.static(path.join(__dirname, '/client/dist')));
console.log(__dirname);
app.use(express.json());
// app.use(cors());

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.post('/glossary', (req, res) => {
  console.log('made it to server side');
  console.log(req.body);
  database.save(req.body.wordToAdd, req.body.defToAdd)
    .then(() => {
      console.log('successfully added');
      // check if code is right
      res.status(204);
      res.end();
    })
})

app.get('/glossary', (req, res) => {
  console.log('retrieving glossary');
  database.retrieve()
    .then((response) => {
      console.log('glossary retrieved');
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    })
})

app.put('/glossary', (req, res) => {
  console.log('updating glossary');
  console.log(req.body);
  database.modify(req.body.existingWord, req.body.newDef)
    .then((response) => {
      console.log('successfully modified');
      res.status(200);
      res.end();
    })

})

app.delete('/glossary', (req, res) => {
  console.log('deleting item');
  let wordToDelete = req.body.word;
  database.remove(wordToDelete)
    .then((response) => {
      console.log('succesfully deleted');
      res.status(200);
      res.end();
    })
})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
