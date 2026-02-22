import React from 'react'

const Search = ({ searchTerm, onSearchChange }) => {
  return (
    <div>
      <label htmlFor="plant-search">Search plants by name: </label>
      <input
        id="plant-search"
        type="text"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="e.g. monstera"
      />
    </div>
  )
}

export default Search