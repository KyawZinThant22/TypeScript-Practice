import React from "react";
import Brian from "./components/Brian";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import User from "./components/state/User";
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
      {/* <Greet name="Kyaw Zin Thant" isLoggedIn={true} />
      <Person name={personList} />
      <PersonList names={personLists} />
      <Status status="success" />
      <Heading>
        what is the meaning of life and how can we survive in this cruel world
      </Heading>
      <Brian>
        <Heading>
          My Name is brian and i am working as a front end developer at Xsphere
        </Heading>
      </Brian> */}
      {/* <Button handleClicked={(e, id) => console.log(e, id)} />
      <Input vlaue="kyaw zin thant" handleChange={(e) => console.log(e)} />
      <Container style={{ border: "1px solid black", padding: "4rem" }} /> */}
      <User />
    </div>
  );
}

export default App;
