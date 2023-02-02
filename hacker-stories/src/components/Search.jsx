import React, { Fragment } from "react";


const Search = ({ search, onSearch }) => {
  return (
    <Fragment>
      <label key="1" htmlFor="search">Search: </label>
      <input key="2" id="search" type="text" value={search} onChange={onSearch} />
    </ Fragment>
  );
};

export default Search;
