import React from 'react';
import Word from './wordList.jsx';

const WordList = ({ words }) => (

  <div>
    {words.forEach((word) => (
      <Word word={word} />
    ))}
  </div>

)

export default WordList;




