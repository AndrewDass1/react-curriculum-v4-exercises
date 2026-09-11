// TOPIC: Correct useRef usage to control DOM elements
// TASK: Implement focusing an input field when the button is clicked.
import { useRef } from 'react';

export default function FillRefFocus() {
  let ref = useRef('');

  function focusInput() {
    let getText = document.getElementById('getText');

    let textValue = getText.value;

    ref.current = textValue;

    alert(ref.current);
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input type="text" id="getText" placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// Added useRef and HTML id = getText to obtain HTML value
// by using documentgetElementbyId and useRef displays
// the value from documentgetElementById

// Added an alert to show that it will show the text that
// was displayed
