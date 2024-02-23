import React from 'react';
import Word from './word.jsx';

const WordList = ({ words, handleEdit, handleDelete}) => (
    <div id='wordList'>
      {words.map((word) => {
        return <Word key={word._id} word={word.word} definition={word.definition} id={word._id} handleEdit={handleEdit} handleDelete={handleDelete} />
      })}
    </div>
)

export default WordList;




