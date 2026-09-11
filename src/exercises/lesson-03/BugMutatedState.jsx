// src/exercises/lesson-03/BugMutatedState.jsx

/*
  BUG #2 — State Issue

  This component displays a count and updates it when the button is clicked.
  However, the way the count is being changed causes the component to behave
  incorrectly.
*/

import { useEffect, useState } from 'react';
export default function BugMutatedState() {
  let [count, setCount] = useState(0);

  // Modified useEffect function
  useEffect(() => {
    console.log(count);
  }, [count]);

  function handleAdd() {
    setCount((count) => count + 1);
  }

  return (
    <div>
      <p>Bug 2 Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
}

// Explanation:
// Before, the button was increasing and being fully operational by setCount function.
// Though, the console.log(count) value was behind by 1 every time when the button
// was clicked. The useEffect function was implemented and placed above the handleAdd function to
// correctly display the console.log value of count when the button is clicked.
