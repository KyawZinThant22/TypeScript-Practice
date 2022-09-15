import React from "react";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

function App() {
  let personList = {
    first: "Kyaw",
    last: "Thant",
  };

  const personLists = [
    {
      first: "monkey",
      last: "D luffy",
    },
    {
      first: "Roronora",
      last: "Zoro",
    },
    {
      first: "nico",
      last: "robin",
    },
  ];
  return (
    <div className="App">
      <Greet name="Kyaw Zin Thant" age={18} isLoggedIn={false} />
      <Person name={personList} />
      <PersonList names={personLists} />
    </div>
  );
}

export default App;
