import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>abhishek pardhi</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {!isError ? <h1>no error</h1> : <h1>Error...</h1>}
    </>
  );
};

export default ShortCircuit;
