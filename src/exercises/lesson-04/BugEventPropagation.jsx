// TOPIC: Event Bubbling & Stopping Propagation
// TASK: Ensure only the inner button's action triggers an alert when the button is pushed

import { useRef } from 'react';

export default function BugEventPropagation() {
  let ref = useRef(0);

  function handleOuterClick() {
    ref.current = alert("RED BOX CLICKED ❌ Don't show me!");
  }

  function handleInnerClick() {
    ref.current = alert('Button Clicked ✅');
  }

  return (
    <>
      <h2>Stopping Event Propagation</h2>
      <div
        style={{ padding: 20, border: '2px solid red' }}
        onClick={handleOuterClick}
      >
        <button
          onClick={handleInnerClick}
          style={{ padding: 20, border: '2px solid blue' }}
        >
          Click inner button
        </button>
      </div>
    </>
  );
}

// Did not solve, not really sure how to

// Tried putting border around button itself though it
// changes the display and there aren't two objects now
// two objects meaning border and button, it would just
// be a button with a different shading
