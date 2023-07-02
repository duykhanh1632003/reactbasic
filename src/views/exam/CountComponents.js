import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function CountComponents() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
    <button onClick={handleClick}>
      Click {count} times
    </button>
    </>
  );
}

export default CountComponents;
