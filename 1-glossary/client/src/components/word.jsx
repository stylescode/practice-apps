import React from 'react';

const Word = ({ word }) => (
  <div>
    <div>{word.word}</div>
    <div>{word.definition}</div>
    <button class={word.id}>EDIT</button>
    <button class={word.id}>DELETE</button>
  </div>
)

export default Word;