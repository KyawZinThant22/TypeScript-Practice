import React from "react";
import Brian from "./components/Brian";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

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
      <Greet name="Kyaw Zin Thant" isLoggedIn={true} />
      {/* // <Person name={personList} />
      // <PersonList names={personLists} />  */}
      <Status status="success" />
      <Heading>
        what is the meaning of life and how can we survive in this cruel world
      </Heading>
      <Brian>
        <Heading>
          My Name is brian and i am working as a front end developer at Xsphere
        </Heading>
      </Brian>
    </div>
  );
}

export default App;
