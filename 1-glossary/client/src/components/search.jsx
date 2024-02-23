import React from 'react';

const Search = ({ handleSearch }) => {

  const [term, setTerm] = React.useState('');

  const handleChange = (event) => {
    setTerm(event.target.value);
  }

  const searchTerm = () => {
    handleSearch(term);
    setTerm('');
    let searchBar = document.getElementById('searchBar');
    searchBar.value = '';
  }

  return(
    <div>
      <input type='text' id='searchBar' placeholder='search for a word...' onChange={(e) => handleChange(e)}/>
      <button onClick={searchTerm}>SEARCH</button>
    </div>
  )
}

export default Search;