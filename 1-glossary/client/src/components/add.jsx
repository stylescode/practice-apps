import React from 'react';

const Add = ({ handleAdd }) => {

  const [wordToAdd, setWordToAdd] = React.useState('');
  const [defToAdd, setDefToAdd] = React.useState('');

  const handleWordInput = (event) => {
    console.log(event.target.value);
    setWordToAdd(event.target.value);
  }

  const handleDefInput = (event) => {
    console.log(event.target.value);
    setDefToAdd(event.target.value);
  }

  const addInputs = () => {
    handleAdd(wordToAdd, defToAdd);
    setWordToAdd('');
    setDefToAdd('');
    document.getElementById('wordBar').value = '';
    document.getElementById('defBar').value = '';
  }

  return(
    <div>
      <div>
        Word: <input type='text' id='wordBar' onChange={(e) => handleWordInput(e)}/>
      </div>
      <div>
        Definition: <input type='text' id='defBar' onChange={(e) => handleDefInput(e)}/>
      </div>
      <button onClick={addInputs}>ADD WORD</button>
    </div>
  )

}

export default Add;