import React from 'react'

function SearchBox({ onSearch}) {
  return (
    <input type="text"
    className="form-control"
    placeHolder="Search sellers by name"
    onChange={(e)=>
    onSearch(e.target.value)}
    />
  );
}

export default SearchBox;