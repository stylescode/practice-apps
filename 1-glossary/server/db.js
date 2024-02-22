const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true});

// const db = mongoose.connection;

// db.once('open', () => {
//   console.log('connected to database!');
// })

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

// use process.end.DB_NAME

const entrySchema = new mongoose.Schema({
  word: String,
  definition: String
})

const Term = mongoose.model('Term', entrySchema);

exports.save = (word, definition) => {
  console.log('in db save');

  return Term.create({ word, definition});

}

exports.retrieve = () => {
  // retrieve all documents in terms collection
  console.log('in db retrieve');

  return Term.find({}).exec();
}

exports.modify = (existingWord, newDef) => {
  console.log('in db modify');
  // find by existingword
  let updatedEntry = {
    word: existingWord,
    definition: newDef
  }

  return Term.updateOne({ word: existingWord }, { definition: newDef }).exec();

}

exports.remove = (wordToRemove) => {
  console.log('in db remove');

  return Term.deleteOne({ word: wordToRemove }).exec();

}