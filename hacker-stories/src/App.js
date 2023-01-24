import React from "react";
import "./App.css";
import List from "./components/Lisst";
import Search from "./components/Search";

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org",
      author: "Dan Abromov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];


  const handleSearch = (event) => {
    console.log(event.target.value);
  }

  return (
    <div className="App">
      <h1>My Hackers Stories</h1>
      <Search  onSearch={handleSearch}/>
      <hr />
      <List list={stories} />
    </div>
  );
};
export default App;
