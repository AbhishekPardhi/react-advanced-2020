import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);
  const changeCounter = (val) => {
    setCounter(counter + val);
  };
  const changeCounterDelayed = () => {
    setTimeout(() => {
      // setCounter(counter + 1);
      setCounter((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <h2>regular counter</h2>
      <h1>{counter}</h1>
      <button className="btn" onClick={() => changeCounter(1)}>
        increase
      </button>
      <button className="btn" onClick={() => changeCounter(-1)}>
        decrease
      </button>
      <button className="btn" onClick={() => setCounter(0)}>
        reset
      </button>
      <h2>complex counter</h2>
      <h1>{counter}</h1>
      <button className="btn" onClick={changeCounterDelayed}>
        delayed increase
      </button>
    </>
  );
};

export default UseStateCounter;
