import React from "react";
import { render } from "react-dom";
import axios from 'axios';

import WordList from './components/wordList.jsx';
import Search from './components/search.jsx';
import Add from './components/add.jsx';

const Server = 'http://localhost:3005/glossary';

const App = () => {

  const [words, setWords] = React.useState([]);

  const [displayedWords, setDisplayedWords] = React.useState(words);

  const retrieveWords = () => {
    axios.get(Server)
      .then((response) => {
        setWords(response.data);
        setDisplayedWords(response.data);
      })
  }

  React.useEffect(() => {
    retrieveWords();
  }, []);

  const handleSearch = (input) => {
    const filteredWords = [];

    words.forEach((word) => {
      if (word.word.includes(input)) {
        filteredWords.push(word);
      }
    })
    setDisplayedWords(filteredWords);
  }

  const handleAdd = (wordToAdd, defToAdd) => {
    axios.post(Server, { wordToAdd, defToAdd })
      .then(() => {
        retrieveWords();
      })
  }

  const handleEdit = (existingWord, newDefinition) => {
    axios.put(Server, { existingWord, newDefinition })
      .then(() => {
        retrieveWords();
      })
  }

  const handleDelete = (wordId) => {
    axios.delete(`${Server}/${wordId}`)
      .then(() => {
        retrieveWords();
      })
  }


  return(
    <div>
      <p>WORDS AND DEFS</p>
      <Search handleSearch={handleSearch}/>
      <Add handleAdd={handleAdd}/>
      <div>Current Dictionary:</div>
      <WordList words={displayedWords} handleEdit={handleEdit} handleDelete={handleDelete}/>
    </div>
  )
}

render(<App />, document.getElementById("root"));
