import React, { useState } from "react";

const Search = (props) => {
  const [serachTerm, setSerachTerm] = useState("");

  const handleChange = (event) => {
    setSerachTerm(event.target.value);
    props.onSearch(event);
  };
    
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
      <p>
        Searching for <strong>{serachTerm}</strong>
      </p>
    </div>
  );
};

export default Search;
