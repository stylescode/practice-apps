import React from "react";
import { render } from "react-dom";
import axios from 'axios';

import WordList from './components/wordList.jsx';
import Search from './components/search.jsx';
import Add from './components/add.jsx';

const App = () => {

  const [words, setWords] = React.useState([]);

  const handleSearch = (input) => {
    console.log('you searched for ' + input);
  }

  const handleAdd = (wordToAdd, defToAdd) => {
    console.log('adding word: ', wordToAdd);
    console.log('adding def: ', defToAdd);
  }

  const handleEdit = () => {
    console.log('editing word');
  }

  const handleDelete = () => {
    console.log('deleting word');
  }


  return(
    <div>
      <p>WORDS AND DEFS</p>
      <Search handleSearch={handleSearch}/>
      <Add handleAdd={handleAdd}/>
      <div>Current Dictionary:</div>
      <WordList words={words}/>
    </div>
  )
}

render(<App />, document.getElementById("root"));
