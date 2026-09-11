// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((count) => 0.5 + count);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// Write your explanation of how StrictMode helps us catch this bug

// Instead of adding 1, you add 0.5 because the call back function will recall
// the function twice everytime because strict mode is enabled. Since it run
// twice everytime, instead of adding 1, add 0.5 to make the function add
// a total of 1.
