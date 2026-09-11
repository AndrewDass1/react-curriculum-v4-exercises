import { useState } from 'react';

// Added this:
import Parent from './Parent';

export default function Child({ increment }) {
  return <button onClick={increment}>Increment Counter</button>;
}
