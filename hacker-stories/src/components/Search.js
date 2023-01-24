import React, { useState } from "react";

const Search = (props) => {
  

  const handleChange = (event) => {
    props.onSearch(event);
  };
    
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{props.onSearch}</strong>
      </p>
    </div>
  );
};

export default Search;
