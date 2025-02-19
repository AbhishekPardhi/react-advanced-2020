import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Samarth",
    age: "19",
    message: "Crazy boi",
  });
  const changeMessage = () => {
    let newPerson = person;
    newPerson.message = "Crazy bhyi";
    setPerson({ ...person, message: "Crazy bhyi" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
