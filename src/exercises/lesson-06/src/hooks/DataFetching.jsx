import { useState, useEffect } from 'react';

export default function DataFetch() {
  return useEffect(() => {
    const timeout = setTimeout(() => {
      setTasks([
        { id: 1, title: 'Learn React', completed: true },
        { id: 2, title: 'Refactor code', completed: false },
        { id: 3, title: 'Organize files', completed: false },
      ]);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <p>Loading tasks...</p>;
  }
}

// have to return a div tag under timeout with the data passed through
// return tasks data
