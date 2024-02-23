import React from 'react';

let wordToEdit = '';
let newDefinition = '';

const Word = ({ word, definition, id, handleEdit, handleDelete }) => {

  const handleEditClick = (event) => {
    wordToEdit = event.target.className;
    let modal = document.getElementById('editDialog');
    modal.showModal();
  }

  const handleTyping = (event) => {
    newDefinition = event.target.value;
  }

  const handleCancel = (e) => {
    e.preventDefault();
    wordToEdit = '';
    newDefinition = '';
    let modal = document.getElementById('editDialog');
    modal.close();
  }

  const submitEdit = (e) => {
    e.preventDefault();
    let modal = document.getElementById('editDialog');
    modal.close();
    document.getElementById('editText').value = '';
    handleEdit(wordToEdit, newDefinition);
    wordToEdit = '';
    newDefinition = '';
  }

  const handleDeleteClick = (event) => {
    handleDelete(event.target.className);
  }

  return(
    <div id='wordEntry'>
      <div id='wordInstance'>{word}</div>
      <div>{definition}</div>
      <button className={word} onClick={(e) => handleEditClick(e)}>EDIT</button>
      <button className={id} onClick={(e) => handleDeleteClick(e)}>DELETE</button>

      <dialog id='editDialog'>
        <form>
          <textarea id='editText' placeholder='please enter a new definition' onChange={(e) => handleTyping(e)}></textarea>
          <button onClick={(e) => submitEdit(e)}>Submit</button>
          <button onClick={(e) => handleCancel(e)}>Cancel</button>
        </form>
      </dialog>
    </div>
  )
}

export default Word;