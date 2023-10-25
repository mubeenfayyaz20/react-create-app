import React, { useState } from "react";

const practise = () => {
  const [isCounter, setCounter] = useState[0];

  const addCounter = (e) => {
    e.preventDefault;
    setCounter(isCounter + 1);
  };

  return (
    <div>
      <button onClick={addCounter}>Add</button>
    </div>
  );
};

export default practise;
