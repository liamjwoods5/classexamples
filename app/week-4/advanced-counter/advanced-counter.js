// advanced-counter.js
import React from "react";

// This is a functional React component named AdvCounter
export default function AdvCounter({
  currentCount, // The current count value passed as a prop
  incrementCounterFunction, // Function to increment the counter, passed as a prop
  resetCounterFunction, // Function to reset the counter, passed as a prop
}) {
  // Initialize a variable to control the disabled state of the increment button
  let btnDisable = false;

  // If the current count is 10 or more, disable the increment button
  if (currentCount >= 10) {
    btnDisable = true;
  }

  // Define a string with multiple classes for button styling
  let btnStyles =
    "bg-blue-600 text-white rounded py-2 px-4 mt-5 hover:bg-blue-500 active:bg-yellow-500 disabled:bg-red-500 mr-2";

  // Return the JSX to render the component
  return (
    <div className="bg-slate-300 p-5 m-3">
      {/* Display the title of the counter */}
      <h2 className="text-2xl text-gray-500">Advanced Counter</h2>
      {/* Display the current count */}
      <p className="text-2xl text-gray-500">Current Count: {currentCount}</p>
      {/* Button to increment the counter, disabled based on btnDisable */}
      <button
        className={btnStyles}
        onClick={incrementCounterFunction}
        disabled={btnDisable}
      >
        Increment
      </button>
      {/* Button to reset the counter */}
      <button className={btnStyles} onClick={resetCounterFunction}>
        Reset Counter
      </button>
    </div>
  );
}
