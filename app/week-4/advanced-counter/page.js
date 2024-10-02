"use client";
import React, { useState } from "react";
import AdvCounter from "./advanced-counter.js";
// Importing the React library and the useState hook from the 'react' package

// Importing the AdvCounter component from the 'advanced-counter.js' file

// Defining the AdvCounterPage component as the default export of this module
export default function AdvCounterPage() {
  // Declaring a state variable 'count' with an initial value of 0 and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  // Function to increment the counter, only if the current count is less than 10
  const incrementCounter = () => {
    if (count < 10) setCount(count + 1);
  };

  // Function to reset the counter to 0
  const resetCounter = () => {
    setCount(0);
  };

  // Returning the JSX to render the component
  return (
    <main>
      <h2>Advanced Counter</h2>
      <AdvCounter
        currentCount={count}
        incrementCounterFunction={incrementCounter}
        resetCounterFunction={resetCounter}
      />
    </main>
  );
}
