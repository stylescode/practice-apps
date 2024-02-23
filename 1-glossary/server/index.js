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
app.use(cors());

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.post('/glossary', (req, res) => {
  database.save(req.body.wordToAdd, req.body.defToAdd)
    .then(() => {
      res.status(200);
      res.end();
    })
})

app.get('/glossary', (req, res) => {
  database.retrieve()
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.send(error);
    })
})

app.put('/glossary', (req, res) => {
  database.modify(req.body.existingWord, req.body.newDefinition)
    .then((response) => {
      res.status(200);
      res.end();
    })

})

app.delete('/glossary/:id', (req, res) => {
  database.remove(req.params.id)
    .then((response) => {
      res.status(200);
      res.end();
    })
})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
