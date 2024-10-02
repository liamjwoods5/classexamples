"use client";
import { useState } from "react";

// Importing th
// Importing the necessary React functions
import React, { useState } from "react";

// Defining a functional component named SimpleCounter
export default function SimpleCounter() {
  // Declaring a state variable 'count' with an initial value of 0
  // 'setCount' is the function used to update the 'count' state
  const [count, setCount] = useState(0);

  // Function to increment the 'count' state by 1
  const incrementCounter = () => {
    // Updating the 'count' state
    // This triggers a re-render of the component with the new state value
    setCount(count + 1);
  };

  // The return statement defines the JSX to be rendered by this component
  return (
    <main>
      {/* Displaying a heading */}
      <h2>simple counter</h2>
      {/* Displaying the current value of 'count' */}
      <p>Count: {count}</p>
      {/* Button to increment the counter, calls 'incrementCounter' on click */}
      <button onClick={incrementCounter}>increment</button>
    </main>
  );
}
