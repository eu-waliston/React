import React, { Fragment } from "react";
import "./App.css";
import List from "./components/Lisst";

const App = () => {

  const inicialStories = [
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

  const [stories, setStories] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false);



  const getAsyncStories = new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: { stories: inicialStories } })
    }, 2000);
  })

  React.useEffect(() => {

    setIsLoading(true);

    getAsyncStories.then(result => {
      setStories(result.data.stories)
      setIsLoading(true);
    })
  })

  //custom hook
  const useSemiPersistentState = (key, initialState) => {
    const [value, setValue] = React.useState(
      localStorage.getItem(key) || initialState
    );

    React.useEffect(() => {
      localStorage.setItem(key, value);
    });
    return [value, setValue];
  };

  const [searchTerm, setSearchTerm] = useSemiPersistentState("search", "React");

  const handleRemoveStory = (item) => {
    const newStories = stories.filter(
      story => item.objectID !== story.objectID
    );
    setStories(newStories)
  }

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    localStorage.setItem("search", event.target.value);
  };

  const searchedStories = stories.filter((story) => {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">

      <h1>My Hackers Stories</h1>

      <InputWithLabel
        id="search"
        label="search"
        value={searchTerm}
        isFocused
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>


      <hr />
      {
        isLoading ?
          (<p>Loading...</p>)
          :
          (
            <List list={searchedStories} onRemoveItem={handleRemoveStory} />
          )
      }
    </div>
  );
};

const InputWithLabel = ({ id, value, type = "text", onInputChange, isFocused, children }) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isFocused]);

  return (
    < Fragment >
      <label htmlFor={id}>{children}</label>
      &nbsp;
      {/* B */}
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        autoFocus={isFocused}
        onChange={onInputChange}
      />
    </Fragment >
  )
}
export default App;
