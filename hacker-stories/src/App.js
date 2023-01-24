import React from "react";
import "./App.css";
import List from "./components/Lisst";

function App() {
  return (
    <div className="App">
      <h1>My Hackers Stories</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <hr />
      <List />
    </div>
  );
}

export default App;
